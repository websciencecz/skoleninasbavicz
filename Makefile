init:
	npm install
	composer install --prefer-dist --no-progress --no-suggest --no-interaction --optimize-autoloader

assets:
	npx webpack

static:
	php vendor/bin/statie generate source --output=html

build:
		docker-compose run assets npx webpack
		docker-compose run statie

watch:
		docker-compose run assets npx webpack --watch

dev:
		docker-compose run statie
