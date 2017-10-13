FROM node

ADD src /src
RUN cd /src; npm i

WORKDIR /src

EXPOSE 80
CMD ["npm","run","prod"]
