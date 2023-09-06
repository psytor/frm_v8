# Farming Road Map Server

If you have questions on the following code, I will keep the [Farming Road Map Discord Server available](https://discord.com/invite/ZaUcdrY).

If everything is copied fine, you should only need to use the dockers folder and use docker compose to build everything up automatically.

The one thing that has to be done - Please check the README.md of the Farming Road Map portion to tell you which line to edit with a different link to either Google sheets or the Farming Road Map server itself

# Google Sheets
## swgoh_data

I will be leaving a copy of the sheet here: [swgoh_data on Google Drive](https://docs.google.com/spreadsheets/d/1zHIjplw9ljgPoQL4Y06h3b9zR0GGqGHP5u88BXjnyNI/copy)
This example sheet has not script, it's really only for the data. The scripts are found here on GitHub.

Details and code are here: [swgoh_data](https://github.com/psytor/frm_v8/tree/main/google_sheets/swgoh-data)

## Server Side Scripts

I was running everything under dockers, so it's easier to reinstall if needed.

## THE FRM

Original page is here: [Check FRM on Google Sheets](https://docs.google.com/spreadsheets/d/1GuPkazIPuqtGjEwTYD2Y6HTYw34OHLRrvfeNiIbrA4c/copy)

Details and code are here: [frm_v8](https://github.com/psytor/frm_v8/tree/main/google_sheets/frm).

In the FRM code I already had a lot of comments that should help you do everything with it.

## Dockers

If you look in the [docker-compose.yml](https://github.com/psytor/frm_v8/tree/main/dockers/docker-compose.yml) you will see the basic configurations I used to run all my dockers.

 - swgoh_comlink, launches first, configured on port 2500
 - swgoh_status, launches second, configured on port 3223
 - swgohgg_data, launches next to swgoh_comlink and swgoh_status (requiring them), configured on port 3001
 - frm, launches next to swgoh_comlink and swgoh_status (requiring them), configured on port 3000

### swgoh_comlink
### swgoh_status

Both of them are external Dockers that I simply import to use them locally.

To find all the information about them you can go on the Discord of Comlink or their GitHub, Links below:

[SWGoH Comlink](https://github.com/swgoh-utils/swgoh-comlink)

[SWGoH Comlink Discord Server](https://discord.com/invite/zs3DwRrXQP)

### swgohgg_data

Simple Node.JS server that was parsing the API from swgoh.gg find details below.

[Parser swgohgg_data](https://github.com/psytor/frm_v8/tree/main/dockers/swgohgg_data)

### Farming Road Map (frm)

[The Farming Road Map Code](https://github.com/psytor/frm_v8/tree/main/dockers/frm)
