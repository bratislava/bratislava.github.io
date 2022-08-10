---
sidebar_position: 6
---

# Domains

## How set up an external domain on our Kubernetes?

Let's assume you want the domain `mestskakniznica.sk` pointing to our production `nest-city-library.bratislava.sk`. There are a few steps that need to be taken.

1. ### Allow new URL in internal DNS
   It would help if you told our city IT department to allow a new URL in the internal DNS system so that Kubernetes can create a Let's Encrypt certificate. The contact person for that is Filip Kračí. Write him on Teams.
2. ### Prepare new URL in code.
   In `Bratislava-monorepo`, you can find file `urls.env` where the new URL/domain needs to ne added. In our case, it will be `URL_NEXT_CITY_LIBRARY=mestskakniznica.sk` This will tel the pipelines to create a kustomize file with an updated URL for this app.
3. ### Add dummy commit
   To propagate changes from `urls.env` to your app, you need to add a dummy commit with some changes. Pipelines are checking what has changed, and if nothing changes inside the app, nothing is also deployed. So in our case we added some empty line in `/apps/next/city-library/readme.md`. This forced pipelines to recreate the kustomize file.
4. ### Create PR and deploy it
   Merge new changes and deploy them until staging. When everything is ok, then deploy it also to production.
5. ### Check the production version
   After deployment, check if production is working correctly and generate a certificate. If not, check if the URL is correct, or contact Filip.
6. ### (Optional) Add support for www
   If your project needs a `www` prefix, you need to adapt the ingress yaml file accordingly. Note: Certificates will be generated automatically.
   ```yaml
   spec:
     tls:
       - hosts:
           - mestskakniznica.sk
           - www.mestskakniznica.sk
         secretName: next-city-library-tls
     rules:
       - host: mestskakniznica.sk
         http:
           paths:
             - path: /
               pathType: ImplementationSpecific
               backend:
                 service:
                   name: next-city-library-app
                   port:
                     number: 80
       - host: www.mestskakniznica.sk
         http:
           paths:
             - path: /
               pathType: ImplementationSpecific
               backend:
                 service:
                   name: next-city-library-app
                   port:
                     number: 80
   ```
