FROM node:9.0

ADD src /src
RUN cd /src; npm i

ADD front /front
RUN cd /front; npm i
RUN cd /front;npm run dist
RUN cd /front;mv public /src/
RUN ls -l /front
RUN ls -l /src

WORKDIR /src

EXPOSE 80
CMD ["npm","run","prod"]
