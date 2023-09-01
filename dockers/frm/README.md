# Farming Road Map (frm)

This is where most of the magic happens.

## Dockerfile Breakdown

I've got to say, I was using a lower Node I'm hoping this works otherwise I was using 18.13 on Bullseye.

The run would change a little bit to apt update etc...

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

## Source of the Server

## Base

### package.json

 - Express: To server the json return
 - node-fetch: To get the different API
 - jszip: This is related to swgoh_comlink

Type is in module as I broke down my code to keep it more simple.

### server.js

#### Imports

Imports of External Modules

All the different Modules imports. Most of them are for the manipulation of the swgoh_comlink data.

Then all the modules breaking down the Farming Road Map.

You'll get the details below

#### Exports

This will be some of the swgoh_comlink put into memory to be used with other Modules

#### / root

Is only serving an index.html page which is in the /public folder to make sure to test the website easily and with a bit of information.

#### /swgoh-data/chardata served by the Module chardata.js

Returning the list of Characters Data from the swgoh_data sheet to the Farming Road Map sheet

The module is really simple, call the data from the Google Sheets serve it as a JSON response.
There is only a bit of Manipulation to make the JSON response easier to read.

** You need to update the Google Sheets link to your swgoh_data sheet with your secret key

#### /swgoh-data/charfarmlocation served by the Module charfarmloc.js

Returning the list of Characters Farming Locations from the swgoh_data sheet to the Farming Road Map sheet

The module is really simple, call the data from the Google Sheets serve it as a JSON response.
There is only a bit of Manipulation to make the JSON response easier to read.

** You need to update the Google Sheets link to your swgoh_data sheet with your secret key

#### /swgoh-data/shipdata 

Returning the list of Ships Data from the swgoh_data sheet to the Farming Road Map sheet

The module is really simple, call the data from the Google Sheets serve it as a JSON response.
There is only a bit of Manipulation to make the JSON response easier to read.

** You need to update the Google Sheets link to your swgoh_data sheet with your secret key

#### /swgoh-data/shipfarmlocation served by the Module shipfarmloc.js

Returning the list of Characters Farming Locations from the swgoh_data sheet to the Farming Road Map sheet

The module is really simple, call the data from the Google Sheets serve it as a JSON response.
There is only a bit of Manipulation to make the JSON response easier to read.

** You need to update the Google Sheets link to your swgoh_data sheet with your secret key

#### /swgoh-data/missions served by the Module missions.js

Returning the list of Missions from the swgoh_data sheet to the Farming Road Map sheet

The module is really simple, call the data from the Google Sheets serve it as a JSON response.
There is only a bit of Manipulation to make the JSON response easier to read.

** You need to update the Google Sheets link to your swgoh_data sheet with your secret key

#### /swgoh-data/journeyguide served by the Module journey.js

Returning the list of Journeys from the swgoh_data sheet to the Farming Road Map sheet

The module is really simple, call the data from the Google Sheets serve it as a JSON response.
There is only a bit of Manipulation to make the JSON response easier to read.

** You need to update the Google Sheets link to your swgoh_data sheet with your secret key

#### /swgoh-data/dataversion directly in server.js

Returning the list of Versions of the different data set from the swgoh_data sheet to the Farming Road Map sheet

The function is really simple, call the data from the Google Sheets serve it as a JSON response.
There is only a bit of Manipulation to make the JSON response easier to read.

** You need to update the Google Sheets link to your swgoh_data sheet with your secret key

 #### Function gamedataMemory

 This functions pulls data from swgoh_comlink to keep some of the data in Memory for faster response of the server.

 Every calls for data on swgoh_comlink starts with a call to get the latest game Version.

 Then with the latest game version, it will pull the requested segment and place it in Memory.

 #### Function localENGMemory

This functions pulls data from swgoh_comlink to get the Localization (proper name for characters and ship).

And placing it in Memory.

There is some file manipulation in this function as the received part is many smaller files per language.

#### /frm/player/:allycode and /frm/auto/:allycode

This is the main command that fetch the players data from swgoh_comlink.

It then manipulates the data with the data in Memory to give proper characters names.

It also connects to swgoh_stats to pull certain information about the accounts that are not available through swgoh_comlink like Galactic Power.