# haproxy guide

#### IMPORTANT NOTICE
Do not edit supervisor cluster during a day or working days. Best days are weekends idealy in the night. When you do a changes, rolling restart is applied so there should be no down time.

## haproxy configuration
In our supervisor kubernetes cluster you can fing ConfigMap called `haproxy.cfg` which contains main haproxy files. Now we will go through whole config.
Config conatins 4 main sections: `global`, `defaults`, `fronted`, `backend`

### Global
```yaml
    global
        log stdout format raw local0 info
        daemon
        maxconn 50000
```        
contains logging format, then it is running as `daemon`. `maxconn` is number of all connections per second.

### Defaults
```yaml
    defaults
        log global
        timeout client 60s
        timeout connect 60s
        timeout server 60s
```
in defaults, you can find settings for global logging format, or timeouts for connections.

### Frontend http
Section `frontend http` contains all things regarding http connections.
```yaml
    frontend http
      bind *:8080   
      mode http
      log-format "%ci:%cp [%tr] %ft %b/%s %TR/%Tw/%Tc/%Tr/%Ta %ST %B %CC %CS %tsc %ac/%fc/%bc/%sc/%rc %sq/%bq %hr %hs %{+Q}r hostname: %H"
      http-request capture req.hdr(Host) len 100
      
      acl isdev hdr(host) -i fix.slovensko-sk-api.bratislava.sk
      acl ismaster hdr(host) -i slovensko-sk-api.bratislava.sk cdn.bratislava.sk cdn-api.bratislava.sk tkg.dev.bratislava.sk tkg.staging.bratislava.sk tkg.bratislava.sk tkg.master.bratislava.sk grafana.bratislava.sk harbor.bratislava.sk api.dev.bratislava.sk harbor-notary.bratislava.sk kube-services.bratislava.sk
      
      use_backend master if ismaster
      use_backend dev if isdev
      use_backend dev if { hdr_sub(host) -i dev.bratislava.sk }
      use_backend staging if { hdr_sub(host) -i staging.bratislava.sk }
      use_backend prod if { hdr_sub(host) -i bratislava.sk }
      default_backend prod
```

`bind *:8080` - is our external inconing port for http connections

`mode http` - defining haproxy format (can be `http` or `tcp`)

`log-format "%ci:%cp [%tr] %ft %b/%s %TR/%Tw/%Tc/%Tr/%Ta %ST %B %CC %CS %tsc %ac/%fc/%bc/%sc/%rc %sq/%bq %hr %hs %{+Q}r hostname: %H"` - logging format for debugging

`http-request capture req.hdr(Host) len 100` - capturing header host to logs, used also for debugging

`acl isdev hdr(host) -i fix.slovensko-sk-api.bratislava.sk` conndition, if url address is `fix.slovensko-sk-api.bratislava.sk` then set condition `isdev` to true 

`acl ismaster hdr(host) -i slovensko-sk-api.bratislava.sk, ...` same as above but for master

`use_backend master if ismaster` if acl condition `ismaster` is true, then route traffic to backend `master`

`use_backend dev if isdev` if acl condition `ismdev` is true, then route traffic to backend `dev`

`use_backend dev if { hdr_sub(host) -i dev.bratislava.sk }` if domain has substring `dev.bratislava.sk` then route this to `dev`

`use_backend staging if { hdr_sub(host) -i staging.bratislava.sk }` if domain has substring `staging.bratislava.sk` then route this to `staging`

`use_backend prod if { hdr_sub(host) -i bratislava.sk }` if domain has substring `bratislava.sk` then route this to `prod`

`default_backend prod` if anything fails then default backend is `prod`

### Frontend https
Section `frontend http` contains all things regarding https connections.
```yaml
    frontend https
      bind *:8443
      mode tcp
      option tcplog
      
      tcp-request inspect-delay 5s
      tcp-request content accept if { req.ssl_hello_type 1 }
      tcp-request content reject
      
      acl ismaster req.ssl_sni -i slovensko-sk-api.bratislava.sk cdn.bratislava.sk cdn-api.bratislava.sk tkg.dev.bratislava.sk tkg.staging.bratislava.sk tkg.bratislava.sk tkg.master.bratislava.sk grafana.bratislava.sk harbor.bratislava.sk api.dev.bratislava.sk harbor-notary.bratislava.sk kube-services.bratislava.sk
      acl isdev req.ssl_sni -i fix.slovensko-sk-api.bratislava.sk
      
      use_backend masters if ismaster
      use_backend devs if isdev
      use_backend devs if { req.ssl_sni -m end .dev.bratislava.sk }
      use_backend stagings if { req.ssl_sni -m end .staging.bratislava.sk }
      use_backend prods if { req.ssl_sni -m end .bratislava.sk }
      default_backend prods
```

`bind *:8443` - is our external inconing port for http connections

`mode tcp` - defining haproxy format (can be `http` or `tcp`)

`option tcplog` - tcp logging output

`tcp-request inspect-delay 5s
tcp-request content accept if { req.ssl_hello_type 1 }
tcp-request content reject` - config https specific

`acl isdev req.ssl_sni -i fix.slovensko-sk-api.bratislava.sk` conndition, if url address is `fix.slovensko-sk-api.bratislava.sk` then set condition `isdev` to true

`acl ismaster req.ssl_sni -i slovensko-sk-api.bratislava.sk, ...` same as above but for master

`use_backend masters if ismaster` if acl condition `ismaster` is true, then route traffic to backend `masters`

`use_backend devs if isdev` if acl condition `ismdev` is true, then route traffic to backend `devs`

`use_backend devs if { req.ssl_sni -m end .dev.bratislava.sk }` if domain has substring `dev.bratislava.sk` then route this to `devs`

`use_backend stagings if { req.ssl_sni -m end .staging.bratislava.sk }` if domain has substring `staging.bratislava.sk` then route this to `stagings`

`use_backend prods if { req.ssl_sni -m end .bratislava.sk }` if domain has substring `bratislava.sk` then route this to `prods`

`default_backend prods` if anything fails then default backend is `prods`

### Backends
In this section you can find defined backend servers. 

```yaml
    backend dev
      mode http
      server dev 10.10.10.22:80
    backend devs
      mode tcp
      server dev 10.10.10.22:443

    backend staging
      mode http
      server staging 10.10.10.24:80
    backend stagings
      mode tcp
      server staging 10.10.10.24:443

    backend prod
      mode http
      server prod 10.10.10.21:80
    backend prods
      mode tcp
      server prod 10.10.10.21:443

    backend master
      mode http
      server master 10.10.10.14:80
    backend masters
      mode tcp
      server master 10.10.10.14:443
```

every setting is for `http` and for `tcp` (https).

`backend master` - defining backend name `master`

`mode http` - defining `http` haproxy mode for backend

`server master 10.10.10.14:80` - ip address with port for http server master (cluster master)

`backend masters` - defining backend name `masters`

`mode tcp` - defining `tcp` - haproxy mode for https backend

`server master 10.10.10.14:443` - ip address with port for https server master (cluster master)