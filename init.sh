#!/bin/sh

#Replace passwords for mysql

password=­­`tr -cd '[:alnum:]' < /dev/urandom | fold -w30 | head -n1`

echo "\n\nGenerating new root/anthologieAPI MySQL password :\n\n"
echo $password
echo "\n\nPut that in your password manager, if you lose it, you'll have to open docker-compose.yaml to find it back\n\n"

# MYSQL_PASSWORD: "MySQLPassword"

sed -i -E "s/MYSQL_PASSWORD: \".+\"/MYSQL_PASSWORD: \"$password\"/g" docker-compose.yaml
sed -i -E "s/MYSQL_ROOT_PASSWORD: \".+\"/MYSQL_ROOT_PASSWORD: \"$password\"/g" docker-compose.yaml

sed -i -E "s/MYSQL_PASSWORD: \".+\"/MYSQL_PASSWORD: \"$password\"/g" docker-compose.dev.yaml
sed -i -E "s/MYSQL_ROOT_PASSWORD: \".+\"/MYSQL_ROOT_PASSWORD: \"$password\"/g" docker-compose.dev.yaml

sed -i -E "s/MYSQL_PASSWORD: \".+\"/MYSQL_PASSWORD: \"$password\"/g" src/docker-compose.yaml
sed -i -E "s/MYSQL_ROOT_PASSWORD: \".+\"/MYSQL_ROOT_PASSWORD: \"$password\"/g" src/docker-compose.yaml

sed -i -E "s/password: '.+'/password: '$password'/g" src/config/connections.js

#Replace secret for sails sessions

secret=­­`tr -cd '[:alnum:]' < /dev/urandom | fold -w30 | head -n1`

sed -i -E "s/secret: '.+'/secret: '$secret'/g" src/config/session.js
