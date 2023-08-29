# swgoh_data

This Google sheet was created to hold the different data I required to run my Farming Road Map properly. I am accessing this Google sheet through the Google API module. (Using a Google Sheet as an API / JSON)

[Google Sheets API Overview](https://developers.google.com/sheets/api/guides/concepts)

Here are the different tabs I was using
## CharsFarmLocation
This is maintained manually, as there was no easy API that keeps a record of where characters are farmed. I think there is a reverse check that can be done through swgoh_comlink, but you need to parse all the Nodes and find what you can obtain, but I'm not sure you can find the content of the different shops in game.

Here were the different columns I used:

## Character
Real name of the Characters
There could be repitition for every locations a Character is available.
## Location
Where was the Character available from.
That list was based on the old Crinolo's sheet
Possibilities:
- Hard Modes (L) - For Hard Nodes - Light Side
- Hard Modes (D) - For Hard Nodes - Dark Side
- Hard Modes (Fleet) - For Hard Nodes - On the Fleet Table
- Cantina - For Cantina Nodes
- Cantina Shipments -  For Cantina Battles Shipments
- Guild Shop - For Guild Activity Shipments
- Arena Shipments - For Squad Arena Shipments
- GW Shipments - For Galactic War Shipments
- Fleet Shipments - For Fleet Arena Shipments
- Guild Even Shop - For Guild Events Shipments
- Shard Shop - For Shard Shop
- Achievements - Obtained through Achievements
- Recurring Event - Mostly Journey's etc...
- Conquest - Characters related to Conquests
- Raids - Accessible through Raids
- Galactic Legends - Wellll DUHHH hehehe
- Intro P1 (Marquee) - Characters that just joined and are accessible in Marquee Event
- Intro P2 (Crystal/Packs) - Next step after Marquee Event - Only accessible through Crystals package

There was a few things that needed fix or be added here, For example:

 - The MODES name was coming from Crinolo's sheet
 - Conquest; I never did a store for it
 - with the new Currency I never added all the characters you can find under the Guild Shop now

## Level
This is the exact nodes on which a character was available (Based on Location)

## Cost
Different cost for the respective currency in each Shipments (I never used that data though and I'm not sure if the values were actually still good or not)

## Event Name
For Galactic Legends and Different Journey's Events

## Location Value
This is a quick calculation out of 10/10. If there is more than one, it counts how many times the Character is found, and divided 10 by the ammout, so it gives a score of how difficult a character is hard to get... It was simple math thing to show if a character has more than 1 location that was it :) So a character with 10 means only One location, 5 - Two locations, 3.333333333333333 - Three locations etc...

## ShipsFarmLocation
This is maintained manually, as there was no easy API that keeps a record of where ships are farmed. I think there is a reverse check that can be done through swgoh_comlink, but you need to parse all the Nodes and find what you can obtain, but I'm not sure you can find the content of the different shops in game.

Here were the different columns I used:

## Ship
Real name of the Ships
There could be repitition for every locations a Ship is available.
## Location
Where was the Ship available from.
That list was based on the old Crinolo's sheet
Possibilities:
- Hard Modes (L) - For Hard Nodes - Light Side
- Hard Modes (D) - For Hard Nodes - Dark Side
- Hard Modes (Fleet) - For Hard Nodes - On the Fleet Table
- Cantina - For Cantina Nodes
- Cantina Shipments -  For Cantina Battles Shipments
- Guild Shop - For Guild Activity Shipments
- Arena Shipments - For Squad Arena Shipments
- GW Shipments - For Galactic War Shipments
- Fleet Shipments - For Fleet Arena Shipments
- Guild Even Shop - For Guild Events Shipments
- Shard Shop - For Shard Shop
- Achievements - Obtained through Achievements
- Recurring Event - Mostly Journey's etc...
- Conquest - Ships related to Conquests
- Raids - Accessible through Raids
- Galactic Legends - Wellll DUHHH hehehe
- Intro P1 (Marquee) - Ships that just joined and are accessible in Marquee Event
- Intro P2 (Crystal/Packs) - Next step after Marquee Event - Only accessible through Crystals package

There was a few things that needed fix or be added here, For example:

 - The MODES name was coming from Crinolo's sheet
 - Conquest; I never did a store for it

## Level
This is the exact nodes on which a ship was available (Based on Location)

## Cost
Different cost for the respective currency in each Shipments (I never used that data though and I'm not sure if the values were actually still good or not)

## Event Name
For Galactic Legends and Different Journey's Events

## Location Value
This is a quick calculation out of 10/10. If there is more than one, it counts how many times the Ship is found, and divided 10 by the ammout, so it gives a score of how difficult a ship ter is hard to get... It was simple math thing to show if a ship has more than 1 location that was it :) So a ship with 10 means only One location, 5 - Two locations, 3.333333333333333 - Three locations etc...

## CharsData
This sheet was holding the data pulled from swgoh.gg. The reason it was in there, was to limit the traffic to swgoh.gg.
Due to some changes on swgoh.gg the data from the swgoh.gg website was access through my server as google sheet was getting a time out / other data and could not proceed with it properly.

I never removed the unused data, marked below as "** Never used"

See Service Side Scripts for swgohgg_data

## name
Real name of the characters

## base_id
Special name for each character

## url
** Never used
Link to the character on swgoh.gg

## image
** Never used
Link to the character image on swgoh.gg

## alignment
Light or Dark Side character

## categories
Different associations a character has

## Role
Main role of the character

## Shards to unlock
The amount of shards required for a Character to be unlocked

## ShipsData
This sheet was holding the data pulled from swgoh.gg. The reason it was in there, was to limit the traffic to swgoh.gg.
Due to some changes on swgoh.gg the data from the swgoh.gg website was access through my server as google sheet was getting a time out / other data and could not proceed with it properly.

I never removed the unused data, marked below as "** Never used"

See Service Side Scripts for swgohgg_data

## name
Real name of the ships

## base_id
Special name for each ship

## url
** Never used
Link to the ship on swgoh.gg

## image
** Never used
Link to the ship image on swgoh.gg

## alignment
Light or Dark Side ship

## categories
Different associations a ship has

## Role
Main role of the ship

## Shards to unlock
The amount of shards required for a ship to be unlocked

## Journey Guide
This list is maintained manually. This is a list of requirements for each Journeys there is (All the ones listed under the Journey Guide)

The first line of Data was the title
The Second one with No Selection and no other data to allow an empty sheet when selecting it on the Farming Road Map

There is 4 sections after the name of the Legendary Character
 - Main Characters x 6 - Listing the most important characters normally related to the legendary
 - Side Characters x 10 - Listing the secondary characters required for a Legendary Character
 - Legends x 4 - Other characters required for the Legendary character which are also considered by the Journey Guide
 - Ships x 10 - List of ships that may be required by the Legendary Character

I was using Data Validation for the names to make sure to write the names properly from the CharsData and ShipsData.

Each of the Main, Side and Legends also have a GEAR (g) And Relic (r) attached to them for the requirement they need.

## legcharacter
Name of the Legendary Character

## main1 to main6
Name of the characters required

## gm1 to gm6
The minimum required gear for the listed Legendary

## rm1 to rm6
The Relic level required for the listed Legendary

## side1 to side10
Name of the characters required

## gs1 to gs10
The minimum required gear for the listed Legendary

## rs1 to rs10
The Relic level required for the listed Legendary

## legend1 to legend4
Name of the characters required

## gl2 to gl4
The minimum required gear for the listed Legendary

## rl1 to rl4
The Relic level required for the listed Legendary

## ship1 to ship10
Name of the required ships for the listed Legendary

## Notes
This field was there to give more details when required to the player in the Farming Road Map

## Missions
This list is maintained manually. This is where I started to try to compile the different guides that were out there.

With some latest changes I did on the Farming Road Map, I could add Missions for everyone to have access to them.

It has the same columns as the Journey Guide

The first line of Data was the title
The Second one with No Selection and no other data to allow an empty sheet when selecting it on the Farming Road Map

There is 4 sections after the name of the Mission name
 - Main Characters x 6 - Listing the most important characters that people should mainly focus on
 - Side Characters x 10 - Listing the secondary characters
 - Legends x 4 - Journeys achieved at that moment of the misison
 - Ships x 10 - List of ships to farm

I was using Data Validation for the names to make sure to write the names properly from the CharsData and ShipsData.

Each of the Main, Side and Legends also have a GEAR (g) And Relic (r) attached to them for the requirement they need at this time.

## legcharacter
Name of the Mission

## main1 to main6
Name of the characters

## gm1 to gm6
The minimum required gear

## rm1 to rm6
The Relic level required

## side1 to side10
Name of the characters

## gs1 to gs10
The minimum required gear

## rs1 to rs10
The Relic level required

## legend1 to legend4
Name of the characters

## gl2 to gl4
The minimum required gear

## rl1 to rl4
The Relic level required

## ship1 to ship10
Name of the required ships

## Notes
This field was there to give more details when required to the player in the Farming Road Map

## DataVersions
For each Sheet there was a version.
The sheets manually updated, you needed to update the version so the Farming Road Map would know there is a change and update the data.

The sheets updated by the script running twice a day, the version would be incremented automatically.

This sheet had 3 columns
data (name of the sheet)
Ver (Current version of the sheet named in data)
link (it was only used by the last data... You will understand below ;) )

There was 8 data:

CharsFarmLocation
ShipsFarmLocation
CharsData
ShipsData
Missions
JourneyGuide
SheetVersion

SheetVersion, was when a new version of the Farming Road Map made, you could publish the new link to the older version of the Sheet and share the LINK in the 3rd column

Changing the version would cause a field to get RED on the main page, and sharing the new link

## Logs1month - Logs2month
These sheets were mainly there as a log of when things changed.
