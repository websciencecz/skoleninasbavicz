build:
		docker-compose run assets npx webpack
		docker-compose run statie generate source -c statie_local.yml --output=html
		rm output/css/style.css

watch:
		docker-compose run assets npx webpack --watch

dev:
		docker-compose run statie generate source -c statie_local.yml --output=html

build-prod:
		docker build -t jakubenglicky/skoleninasbavi-cz:latest .
		docker push jakubenglicky/skoleninasbavi-cz:latest
