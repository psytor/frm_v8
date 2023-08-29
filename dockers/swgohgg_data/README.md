# swgohgg_data

The reasons I had to create this quick parser, is because swgoh.gg was returning a "wait" page for a second that Google didn't like and my script started to fail.

So I just created a middle man.

## Dockerfile Breakdown

`FROM node:20.4.0-alpine3.18`

Using the Alpine 3.18 image of node version 20.4.

```
WORKDIR /app
COPY /src .
```
The application files (/src) are copied inside /app on the Docker.

```
RUN apk update && \
    apk upgrade && \
    npm install && \
    apk add dumb-init
```

 - Updating and Upgrading the image.
 - Running npm install to install all the node packages required.
 - Installing dumb-init on the Docker.
 
 Node is not meant to run has Process ID (PID) #1, and it has unexpected behavior in a Docker. By running "dumb-init" first it fixes thoses little bugs.

`CMD ["dumb-init","node","ggdata_server.js"]`

Starting "dumb-init", then node server calling the js "ggdata_server.js" file.

## Source of the server

## Base

### package.json

The only real package needed is now Express as I think Fetch is not accessible from Node, but I always left it there to make sure.

Type is in module as I broke down my code to keep it more simple.

### ggdata_server.js

This is mainly the server file that receive the requests and serve the answer back. There is really not much to talk about here.

#### / root

Is only serving an index.html page which is in the /public folder to make sure to test the website easily and with a bit of information.

#### /characters

Launchs the Module ggCharacters to access swgoh.gg characters API and return the result as a JSON.

#### /ships

Launchs the Module ggShips to access swgoh.gg ships API and return the result as a JSON.

#### listenport

The port is configured within the docker-compose.yml.

You could use a .env or anything else.

## Modules

### ggCharacters and ggShips

Really simple fetching and re-serving the data from swgoh.gg to my swgoh_data sheet

There was absolutely no data manipulation on this sheet.

I could have incorporated it inside the main FRM code, but the problem appeared after, and I didn't want to bring down the main FRM server, so I just created a secondary docker to do that.