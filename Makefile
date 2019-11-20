build:
		docker-compose run assets npx webpack
		docker-compose run statie generate source -c statie_local.yml --output=html
		rm output/css/style.css

build-beta:
		docker-compose run assets npx webpack
		docker-compose run statie generate source -c statie_beta.yml --output=html
		docker build -t jakubenglicky/skoleninasbavi-cz:beta .
		docker push jakubenglicky/skoleninasbavi-cz:beta

build-prod:
		docker-compose run assets npx webpack
		docker-compose run statie generate source -c statie.yml --output=html
		docker build -t jakubenglicky/skoleninasbavi-cz:latest .
		docker push jakubenglicky/skoleninasbavi-cz:latest
