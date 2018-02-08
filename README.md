# anthologie-API
API for translating old texts, using :
- docker as service manager
- sails.js as backend API
- react as frontend

# how to deploy
###### anthologia is now dockerized, to deploy, follow the steps behind

## Clone the repo
- using SSH
`git clone git@github.com:EcrituresNumeriques/anthologie-API.git`
- using HTTPS
`git clone https://github.com/EcrituresNumeriques/anthologie-API.git`

## move to the correct folder
`cd anthologie-API/src/`

## modify secret and passwords
- config/session.js (secret and redis connection, if changed)
- config/connections.js (mysql password/user, optionnal)
- in docker-compose.yaml (mysql password/user, optionnal)

## Launch docker instances
###### this will spin up database for the API and redis for session management, and build the anthologia
`docker-compose up -d`

## You're done!!
Providing you use a reverse dns and a letsencrypt cerbot container

###### you still need to load data and scheme into the database. we'll try to keep an updated version of the production database on the repo.
to make it easier, you can use `docker-compose -f docker-compose.dev.yaml up -d` to spawn a phpmyadmin container and the anthologia on port 8181 and 8080 respectively.



# developpement
If you want to develop, the best way is to change de last step and use the docker-compose inside src/ to spin mysql/redis, and sails lift for the backend.
TODO : add autoreload etc to the dev env
