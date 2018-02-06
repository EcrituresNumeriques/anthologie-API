FROM node

ADD src /src
RUN cd /src; npm i

ADD front /front
RUN cd /front; npm i

WORKDIR /src

EXPOSE 80
CMD ["sails","lift"]
