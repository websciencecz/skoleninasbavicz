FROM node:latest as assets

COPY . /app

WORKDIR /app

RUN npm install
RUN npx webpack


FROM composer:latest as composer

COPY . /app

WORKDIR /app

RUN composer install
RUN vendor/bin/statie generate source -c statie.yml --output=html

FROM httpd:2.4

COPY --from=composer /app/html /usr/local/apache2/htdocs

COPY --from=assets /app/html/css /usr/local/apache2/htdocs/css
COPY --from=assets /app/html/js /usr/local/apache2/htdocs/js

EXPOSE 80
