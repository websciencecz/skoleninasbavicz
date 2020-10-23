build:
		docker-compose run assets npx webpack
		docker-compose run statie

watch:
		docker-compose run assets npx webpack --watch

dev:
		docker-compose run statie

build-prod:
		docker build -t jakubenglicky/skoleninasbavi-cz:latest .
		docker push jakubenglicky/skoleninasbavi-cz:latest
