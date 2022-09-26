# Meilisearch

We use meilisearch for all kinds of searching - often simply through [meilisearch-strapi-plugin](https://github.com/meilisearch/strapi-plugin-meilisearch) (read below), but in the future also to scrape the library catalog.

## Setup

> Important - there might be custom index/search setup for each project - that should be covered in project-specific documentation

### Running meilisearch instance locally

[Read the official docs](https://docs.meilisearch.com/learn/getting_started/quick_start.html#setup-and-installation), we recommend to run in docker.

### Running the meilisearch instance in Kubernetes

> Note: This section needs to be verified, info might be missing or incorrect

You can setup everything relating to your instance using kustomize. Presently this setup tends to be clumped with `strapi` kustomize files, so in the paths below we're always referencing such existing `strapi` setup.

Create the following files:

`kubernetes/base/service-meilisearch.yml`

```yml
apiVersion: v1
kind: Service
metadata:
  name: ${BUILD_REPOSITORY_NAME}-meilisearch
  namespace: ${NAMESPACE}
spec:
  type: ClusterIP
  ports:
    - name: internal
      port: 7700
      targetPort: http
      protocol: TCP
    - name: external
      port: 80
      targetPort: 7700
      protocol: TCP
  selector:
    service: meilisearch
```

`kubernetes/base/stateful-set-meilisearch.yml`

```yml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: ${BUILD_REPOSITORY_NAME}-meilisearch
  namespace: ${NAMESPACE}
  labels:
    service: meilisearch
spec:
  selector:
    matchLabels:
      app: meilisearch
  replicas: 1
  serviceName: ${BUILD_REPOSITORY_NAME}-meilisearch
  template:
    metadata:
      labels:
        service: meilisearch
    spec:
      containers:
        - name: meilisearch
          image: "getmeili/meilisearch:v0.28.0"
          imagePullPolicy: IfNotPresent
          envFrom:
            - configMapRef:
                name: ${BUILD_REPOSITORY_NAME}-meilisearch
            - secretRef:
                name: ${BUILD_REPOSITORY_NAME}-meilisearch-secret
          ports:
            - name: http
              containerPort: 7700
              protocol: TCP
          livenessProbe:
            httpGet:
              path: /health
              port: http
            periodSeconds: 60
            initialDelaySeconds: 60
          readinessProbe:
            httpGet:
              path: /health
              port: http
            periodSeconds: 60
            initialDelaySeconds: 60
          volumeMounts:
            - name: ${BUILD_REPOSITORY_NAME}-meilisearch-data-storage
              mountPath: /meili_data
          resources: {}
  volumeClaimTemplates:
    - metadata:
        name: ${BUILD_REPOSITORY_NAME}-meilisearch-data-storage
        labels:
          service: meilisearch
      spec:
        accessModes: ["ReadWriteOnce"]
        resources:
          requests:
            storage: 10Gi
```

`kubernetes/base/ingress.yml`

```yml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ${BUILD_REPOSITORY_NAME}-ingress
  namespace: ${NAMESPACE}
  labels:
    service: app
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt
    cert-manager.io/issue-temporary-certificate: "true"
    kubernetes.io/ingress.class: haproxy
spec:
  tls:
    - hosts:
        - ${HOSTNAME}
        - ${BUILD_REPOSITORY_NAME}-meilisearch.${DEPLOYMENT_ENV}bratislava.sk
      secretName: ${BUILD_REPOSITORY_NAME}-tls
  rules:
    - host: ${HOSTNAME}
      http:
        paths:
          - path: /
            pathType: ImplementationSpecific
            backend:
              service:
                name: ${BUILD_REPOSITORY_NAME}-app
                port:
                  number: 80
    - host: ${BUILD_REPOSITORY_NAME}-meilisearch.${DEPLOYMENT_ENV}bratislava.sk
      http:
        paths:
          - path: /
            pathType: ImplementationSpecific
            backend:
              service:
                name: ${BUILD_REPOSITORY_NAME}-meilisearch
                port:
                  number: 80
```

Add following to `kubernetes/base/configuration.yml`

```yml
resources: ...
  - ingress.yml
  - stateful-set-meilisearch.yml
  - service-meilisearch.yml

configMapGenerator:
  - name: ${BUILD_REPOSITORY_NAME}-meilisearch
    namespace: ${NAMESPACE}
    envs:
      - .meilisearch.env
```

And to `deployment.yml`

```yml
  ...
  envFrom:
    - secretRef:
        name: ${BUILD_REPOSITORY_NAME}-meilisearch-secret
    - configMapRef:
        name: ${BUILD_REPOSITORY_NAME}-meilisearch
```

#### Env setup

You'll want to setup a meilisearch master key as a secret (check out the section on env vars & secrets), you can see the secret reference above already. The sealed secret file will looks something like this:

```yml
apiVersion: bitnami.com/v1alpha1
kind: SealedSecret
metadata:
  annotations:
    sealedsecrets.bitnami.com/namespace-wide: "true"
  creationTimestamp: null
  name: <your-prefix>-meilisearch-secret
  namespace: standalone
spec:
  encryptedData:
    MEILI_MASTER_KEY: YOUR_BASE_64_ENCODED_KEY
  template:
    data: null
    metadata:
      annotations:
        sealedsecrets.bitnami.com/namespace-wide: "true"
      creationTimestamp: null
      name: <your-prefix>-meilisearch-secret
      namespace: standalone
```

> This is different from the search secret you'll be using to query meilisearch data, and should preferably be different from your admin secret as well, so that you can later swap it painlessly

Along with an appropriate `.meilisearch.env` file for non-secret setup, usually residing at `kubernetes/base/.meilisearch.env`

```
MEILI_ENV=production
MEILI_NO_ANALYTICS=true
```

Setting `MEILI_ENV` to `development` serves a gui with search console by the meili server.

In case you have multiple `.meilisearch.<env>.env` files, reference the correct one in `kubernetes/envs/<env>/kustommization.yml`

```yml
configMapGenerator:
  ...
  - name: ${BUILD_REPOSITORY_NAME}-meilisearch
    namespace: ${NAMESPACE}
    behavior: merge
    envs:
      - .meilisearch.<env>.env
```

## Getting the search and admin keys

More info in meilisearch docs.

```bash
curl --request GET \
  --url http://your-strapi-url/keys \
  --header 'Authorization: Bearer YOUR_MASTER_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"attributesToHighlight":["*"],"limit":21,"q":"asds"}'
```

## Setting up new index

Before you can search your data, you need to a) set up a index in meilisearch instance and b) fill it with the data to be search. Today our indexes (against strapi data) are setup and filled using GUI provided by [meilisearch-strapi-plugin](https://github.com/meilisearch/strapi-plugin-meilisearch) - follow their docs. To set up an index manually, follow the Meilisearch docs.

## Connecting Strapi to meilisearch and dealing with localization

We are using [our own fork](https://github.com/bratislava/strapi-plugin-meilisearch) of [meilisearch-strapi-plugin](https://github.com/meilisearch/strapi-plugin-meilisearch) - this is to deal with the localization issue.

As of today, the original plugin deals only with the primary locale. A one-liner change makes it index all of the locales, but these will then be clumped together. That means that after indexing the data from Strapi GUI, you need to make the following request against _each localized index_:

```bash
curl --request PATCH \
  --url https://your-meili-url/indexes/your-index-name/settings \
  --header 'Authorization: Bearer YOUR_MASTER_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
	"filterableAttributes": ["locale"]
}'
```

Afterwards, you can filter by locale so that your results don't get mixed up, like so:

```bash
curl --request POST \
  --url https://your-meili-url/indexes/your-index-name/search \
  --header 'Authorization: Bearer 0125a124666e7339642c8b04bc05e84697c7afcf50e025f1398642b5f8e42c4d' \
  --header 'Content-Type: application/json' \
  --data '{
	"q": "Youth",
	"filter": ["locale = en"]
}'
```

More info in meilisearch docs.

## Additional settings

Just like with `filterableAttributes`, you can further configure your indexes (i.e. add sortableAttributes) - check out meilisearch docs.

## Accessing search functionality

When you have your indexes setup (using strapi plugin or manually), you can search them using the following

- **debug** using either Postman or by accessing the dev gui served by the meilisearch instance in dev mode
- **frontend/backend** using the [meilisearch-js sdk](https://github.com/meilisearch/meilisearch-js)

Check out Meilisearch pages/github before delving into custom integrations, as they provide & maintain, including embedable search bars and scrapers.
