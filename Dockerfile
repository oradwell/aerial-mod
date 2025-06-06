FROM node:20.19.0

ARG DART_SASS_VERSION=1.89.1

RUN curl -sSLodart-sass-linux-x64.tar.gz \
    "https://github.com/sass/dart-sass/releases/download/${DART_SASS_VERSION}/dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz" \
    && tar xzf dart-sass-linux-x64.tar.gz dart-sass/sass \
    && mv dart-sass/sass /usr/local/bin/sass \
    && rm -rf dart-sass-linux-x64.tar.gz

WORKDIR /build

COPY . ./

RUN npm install \
    && npm run build

FROM nginx:1.27.4-alpine

WORKDIR /usr/share/nginx/html

COPY config/nginx.conf /etc/nginx/conf.d/default.conf

COPY favicon.ico ./

COPY --from=0 /build/dist ./

EXPOSE 80
