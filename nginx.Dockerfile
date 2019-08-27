FROM node:12 as build

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run-script build

FROM ubuntu:xenial

WORKDIR /tmp

RUN apt-get update && apt-get install -y wget \
  build-essential \
  libpcre3 \
  libpcre3-dev \
  libssl-dev

RUN wget http://nginx.org/download/nginx-1.17.3.tar.gz && tar -xf nginx-1.17.3.tar.gz

RUN wget https://github.com/arut/nginx-rtmp-module/archive/v1.2.1.tar.gz && tar -xf v1.2.1.tar.gz

RUN cd nginx-1.17.3 && \
  ./configure --add-module=/tmp/nginx-rtmp-module-1.2.1 && \
  make && \
  make install

COPY nginx.conf /usr/local/nginx/conf/nginx.conf

COPY --from=build /app/dist /var/www/dist

RUN mv /var/www/dist /var/www/html

EXPOSE 8080 1935

CMD /usr/local/nginx/sbin/nginx -g 'daemon off;'
