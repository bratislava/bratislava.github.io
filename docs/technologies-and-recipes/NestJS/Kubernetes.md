# Kubernetes

deploy to kubernetes and environments are setup in `kustomize/kustomization.yml`

**Example:**

```yml
resources:
  - ../../../../kustomize/bases/database
namePrefix: nest-{{app-name}}-
commonLabels:
  app: nest-{{app-name}}

# Apply ConfigMap
patches:
  # this target is about setup deployments, pairing secret values and replace env values with this values
  - target:
      name: app
      kind: Deployment
    patch: |-
      - op: add
        path: /spec/template/spec/containers/0/env
        value:
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: nest-{{app-name}}-db
              key: POSTGRES_PASSWORD
        - name: DATABASE_URL
          value: postgresql://nest-{{app-name}}:$(POSTGRES_PASSWORD)@nest-{{app-name}}-database:5432/nest-{{app-name}}?schema=public
        - name: PARKSYS_CLIENT_SECRET
          valueFrom:
            secretKeyRef:
              name: nest-{{app-name}}-posam
              key: PARKSYS_CLIENT_SECRET
      - op: add
        path: /spec/template/spec/containers/0/envFrom
        value:
        - configMapRef:
            name: nest-{{app-name}}
  # this target is about ingress and setup container url by ingres into bratislava.sk
  - target:
      name: ingress
      kind: Ingress
    patch: |-
      - op: replace
        path: /spec/rules/0/host
        value: $URL_NEST_{{app-name}}
      - op: replace
        path: /spec/tls/0/hosts/0
        value: $URL_NEST_{{app-name}}
  # setup running app on port inside container
  - target:
      name: app
      kind: Service
    patch: |-
      - op: replace
        path: /spec/ports/0/targetPort
        value: 3333
  # setup running database inside container
  - target:
      name: database
      kind: StatefulSet
    patch: |-
      - op: add
        path: /spec/template/spec/containers/0/envFrom
        value:
        - secretRef:
            name: nest-{{app-name}}-db

# Rename Images
images:
  - name: node
    newName: $REPOSITORY/nest-{{app-name}}
    newTag: $TAG
```

_Note:_ more about kubernetes you can read [here](../../architecture/kubernetes/kubernetes.md)
