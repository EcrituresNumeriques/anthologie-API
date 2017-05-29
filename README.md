# anthologie-API
API for translating old texts, using :
- docker as service manager
- sails.js as backend API
- react as frontend

# how to deploy
###### The API is not yet dockerized, so you'll need docker/docker-compose and node/npm on your machine for a little while (this is comming guys!)

## Clone the repo
- using SSH
`git clone git@github.com:EcrituresNumeriques/anthologie-API.git`
- using HTTPS
`git clone https://github.com/EcrituresNumeriques/anthologie-API.git`

## move to the correct folder
`cd anthologie-API/react/`

## modify secret and passwords
- config/session.js (secret and redis connection, if changed)
- config/connections.js (mysql password/user)
- in docker-compose.yaml (mysql password/user)

## It's recommended to block mysql/redis ports so nobody can mess with your data
``
chmod +x iptables.sh
sudo bash iptables.sh
``

## Launch docker instances
###### this will spin up database for the API and redis for session management
`docker-compose up -d`

## install npm dependencies
`npm install`

## launch sails instance
``
npm run dist
npm run postinstall
``

## You're done!!

# developpement
If you want to develop, the best way is to change de last step and use 
`npm run start` instead of `npm run postinstall`
you'll get a nice autoreload environnement for react/sails, don't forget to `npm run dist` if you plan on keepinng the compiled files up to date (so the server just needs `npm run restart` after a git pull or something)
