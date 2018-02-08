FROM node:9.0

# fast build

ADD front/package.json /front/package.json
RUN cd /front; npm i

ADD src/package.json /src/package.json
RUN cd /src; npm i

# add source
ADD src /src
ADD front /front

# build front end
RUN cd /front;npm run dist
RUN cd /front;mv public /src/

WORKDIR /src

EXPOSE 80
CMD ["npm","run","prod"]
