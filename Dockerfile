FROM node:16.18.0

RUN apt-get update \
    && apt-get --no-install-recommends  -y install ruby-full \
    && gem install ffi -v 1.17.1 \
    && gem install sass \
    && apt-get clean

WORKDIR /build

COPY . ./

RUN npm install \
    && npm install -g grunt-cli \
    && grunt

FROM nginx:1.22-alpine

WORKDIR /usr/share/nginx/html

COPY config/nginx.conf /etc/nginx/conf.d/default.conf

COPY favicon.ico ./

COPY --from=0 /build/css ./css
COPY --from=0 /build/js ./js
COPY --from=0 /build/fonts ./fonts
COPY --from=0 /build/index.html ./
