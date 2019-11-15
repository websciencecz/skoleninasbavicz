build:
		docker-compose run assets npx webpack
		docker-compose run web vendor/bin/statie generate source -c statie_local.yml --output=html
		rm output/css/style.css
