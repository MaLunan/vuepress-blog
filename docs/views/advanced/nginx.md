---
title: 高级进阶-nginx config文件配置
sidebar: true
# isShowComments: true
---

# 高级进阶-nginx config文件配置

<ClientOnly>
<title-pv/>
</ClientOnly>

```nginx
#  power by www.phpStudy.net 
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;
    #tcp_nodelay on;
  fastcgi_connect_timeout 300;
  fastcgi_send_timeout 300;
  fastcgi_read_timeout 300;
  fastcgi_buffer_size 128k;
  fastcgi_buffers 4 128k;
  fastcgi_busy_buffers_size 256k;
  fastcgi_temp_file_write_size 256k;

  #gzip  on;
  gzip on;
  gzip_min_length  1k;
  gzip_buffers     4 32k;
  gzip_http_version 1.1;
  gzip_comp_level 2;
  gzip_types       text/plain application/x-javascript text/css application/xml;
  gzip_vary on;
  gzip_disable "MSIE [1-6].";

  server_names_hash_bucket_size 128;
  client_max_body_size     100m; 
  client_header_buffer_size 256k;
  large_client_header_buffers 4 256k;

    server {
        listen       80;
        server_name  www.zmln1021.cn;
         
        location /{
            root 'C:/Program Files/phpstudy/WWW/'; 
            index index.html index.htm;
            try_files $uri $uri/ /index.html;
            rewrite ^(.*) https://$host$1 permanent;
        }  

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        location ~ \.php(.*)$  {
            fastcgi_pass   127.0.0.1:9000;
            fastcgi_index  index.php;
            fastcgi_split_path_info  ^((?U).+\.php)(/?.+)$;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            fastcgi_param  PATH_INFO  $fastcgi_path_info;
            fastcgi_param  PATH_TRANSLATED  $document_root$fastcgi_path_info;
            include        fastcgi_params;
        }

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
        location = /dt {
        proxy_pass  https://www.duitang.com/napi/blog/list/by_filter_id/;
                    
    }
        location = /dm {
        proxy_pass  https://search.damai.cn/searchajax.html;
    }
        location = /sll {
        proxy_pass  https://mall.360.cn/h5/getPrimaryCategory;
    }
        location = /sllitem{
        proxy_pass  https://mall.360.cn/h5/getSecondaryCategory;
    }
        location = /sllzy{
        proxy_pass  https://mall.360.cn/skin/container;
    }
        location = /sllpbl {
        proxy_pass  https://search.mall.360.cn/search/latest;
    }
        location = /sllxs {
        proxy_pass  https://mall.360.cn/appRush/hall;
    }
        location = /api {
        proxy_pass  https://m.9ji.com/web/api;
    }
}
 server {
     listen 443;
     server_name www.zmln1021.cn;
     ssl on;
     ssl_certificate test.crt;
     ssl_certificate_key test1.key;
     ssl_session_timeout 5m;
     ssl_protocols TLSv1 TLSv1.1 TLSv1.2; 
     ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
     ssl_prefer_server_ciphers on;
     location / {
         root   'C:/Program Files/phpstudy/WWW/';
         index  index.html index.htm;
         try_files $uri $uri/ /index.html;
     }
 }
 
server {
    listen 80;
    server_name  m.zmln1021.cn;
 
    location / {
         root   'C:/Program Files/phpstudy/WWW/webapp';
         index  index.html index.htm;
         try_files $uri $uri/ /index.html;
         rewrite ^(.*) https://$host$1 permanent;
     }
}
 server {
     listen 443;
     server_name m.zmln1021.cn;
     ssl on;
     ssl_certificate webapp.crt;
     ssl_certificate_key webapp1.key;
     ssl_session_timeout 5m;
     ssl_protocols TLSv1 TLSv1.1 TLSv1.2; 
     ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
     ssl_prefer_server_ciphers on;
     location / {
         root   'C:/Program Files/phpstudy/WWW/webapp';
         index  index.html index.htm;
         try_files $uri $uri/ /index.html;
     }
 }

    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443;
    #    server_name  localhost;

    #    ssl                  on;
    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_timeout  5m;

    #    ssl_protocols  SSLv2 SSLv3 TLSv1;
    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers   on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

include vhosts.conf;

}
```

<ClientOnly>
  <leave/>
</ClientOnly/>