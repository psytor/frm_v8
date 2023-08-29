FROM node:20.4.0-alpine3.18

WORKDIR /app

COPY /src .

RUN apk update && \
    apk upgrade && \
    npm install && \
    apk add dumb-init

CMD ["dumb-init","node","ggdata_server.js"]