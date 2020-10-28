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

FROM peckadesign/php:7.4

COPY --from=composer /app/html /var/www/html

COPY --from=assets /app/html/css /var/www/html/css
COPY --from=assets /app/html/js /var/www/html/js

EXPOSE 80
