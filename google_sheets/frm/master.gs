// ****************************************
// Main Variables
// ****************************************

// Variables for Google Sheets good functioning
// ss is Mainly to shorten the command as you will always need the SpreadsheetApp everywhere

var ss = SpreadsheetApp.getActiveSpreadsheet();

// Shortcut to get the ally code in the sheet

var allyCodeCell = profile.getRange(3,2);

// ShortCuts for the different sheets needed

var profile = ss.getSheetByName("Profile");
var collectionUnit = ss.getSheetByName("Your Characters");
var collectionShip = ss.getSheetByName("Your Ships");
var CharList = ss.getSheetByName("CharsData");
var ShipList = ss.getSheetByName("ShipsData");
var CharLocat = ss.getSheetByName("CharsFarmLocation");
var ShipLocat = ss.getSheetByName("ShipsFarmLocation");
var CurrFarm = ss.getSheetByName("Current Farming")


// ****************************************************
// Ally Code verification before Main Execution
//
// Making sure that it's not empty and it has 9 numbers
// ****************************************************

function allyCodeCheck() {
  
  // ****************************************
  // Function Variables
  // ****************************************
  
  var ui = SpreadsheetApp.getUi();
  var allyCode = allyCodeCell.getDisplayValue();
  
  // ****************************************
  // Check if there is an Ally Code in the cell for it on the Profile Sheet
  // ****************************************
  
  if (allyCode == ""){
    
    // ****************************************
    // If there is no Ally Code - Request for one - Cancel Button "Stops the script"
    // ****************************************    
    var allyCodeMissing = ui.prompt('Ally Code Missing!', 'Please fill in your Ally Code:', ui.ButtonSet.OK_CANCEL);
    
    if (allyCodeMissing.getSelectedButton() == ui.Button.CANCEL){return;}
    
    
    // ****************************************
    // If user press OK, check and make sure that there is an Ally Code that was entered in the popup window
    // ****************************************    
    if (allyCodeMissing.getSelectedButton() == ui.Button.OK){
      
      // ****************************************
      // If no Ally Code - Stop the scripts with a message saying it needs a code
      // ****************************************        
      if (allyCodeMissing.getResponseText() == "") {ui.alert('No Ally Code Specified!', 'Please specify your Ally Code!', ui.ButtonSet.OK); return;}
      
      else {
        
        // ****************************************
        // Ally Code given in the Windows - Make sure it's 9 numbers
        // **************************************** 
        if (allyCodeMissing.getResponseText().length == 9 && !isNaN(allyCodeMissing.getResponseText())) {
          
          allyCodeCell.setValue(allyCodeMissing.getResponseText());
          
          allyCode = allyCodeMissing.getResponseText();
          
          // ****************************************
          // Run the main script
          // **************************************** 
          mainRequest(allyCode);
        }
        else { 
          // ****************************************
          // Error if this wasn't a number with 9 digits
          // ****************************************   
          ui.alert("Invalid Entry! Please make sure you entered 9 numbers for your Ally Code!");}
        
      }
    }
  }
  
  else 
  {if (allyCode.length == 9 && !isNaN(allyCode)) {mainRequest(allyCode);}
   else {ui.alert("Invalid Entry! Please make sure you entered 9 numbers for your Ally Code!");}
  }
}


function mainRequest(allyCode){
  
  // Launch the version check to update all the Data pulled
  versionCheck();
  
  // ****************************************
  // Function Variables
  // ****************************************
  var playerAPI = UrlFetchApp.fetch("http://farmroadmap_link:3000/frm/player/"+allyCode);
  var playerJSON = JSON.parse(playerAPI.getContentText());
  var charLocal = CharList.getDataRange().getValues();
  var shipLocal = ShipList.getDataRange().getValues();
  var charsLocatCheck = CharLocat.getDataRange().getValues();
  var shipsLocatCheck = ShipLocat.getDataRange().getValues();
  
  var units = [];
  var ships = [];
  var runit = [];
  var rship = [];
  var star1 = 15;
  var star2 = 25;
  var star3 = 30;
  var star4 = 65;
  var star5 = 85;
  var star6 = 100;
  var star7 = 'MAX';
  var unitRole;
  var unitAlignment;
  var unitAffiliations;
  var localRow;
  var shardtoupg;
  var farmLoc;
  var cantLoc;
  var lightLoc;
  var darkLoc;
  var fleetLoc;
  var farmDiff;
  
  // ****************************************
  // Backup and Clear Current Units List
  // ****************************************
  
  var clearUnits = collectionUnit.getDataRange().getValues();
  var clearUnitsLength = clearUnits.length;
  var clearShips = collectionShip.getDataRange().getValues();
  var clearShipsLength = clearShips.length;
  
  if (clearUnitsLength > 2) {
    collectionUnit.deleteRows(2, clearUnitsLength-2);
    collectionUnit.getRange(2,1,1,20).clearContent();
  }
  
  if (clearShipsLength > 2) {
    collectionShip.deleteRows(2, clearShipsLength-2);
    collectionShip.getRange(2,1,1,18).clearContent();
  }
  
  // ****************************************
  // Getting Player Information
  // ****************************************
  
  var dateString = playerJSON[0].last_updated;
  
  if(!isNaN(dateString)){
    var toFix = new Date(dateString);
    var dateFixed = Utilities.formatDate(toFix, ssTz, 'yyy-MM-dd hh:mm');
  }
  else {
    
    var toFix = 23 - dateString.length;
    var Fixed = dateString.slice(0, toFix)+'Z';
    var dateSliced = new Date(Fixed);
    var dateFixed = Utilities.formatDate(dateSliced, ssTz, 'yyy-MM-dd hh:mm');
  }
  
  var playerInfo = {
    name: playerJSON[0].name,
    guildName: playerJSON[0].guild_name,
    level: playerJSON[0].level,
    arena: playerJSON[0].arena_rank,
    heroesGP: playerJSON[0].character_galactic_power,
    shipsGP: playerJSON[0].ship_galactic_power,
    GP: playerJSON[0].galactic_power,
    lastUpdate : dateFixed,
    source : playerJSON[0].source
  };
  
  for ( var data=0, list = playerJSON[1].length; data < list; data++){
    
    // ****************************************
    // Separate Units and Ships
    // ****************************************    
    
    if (playerJSON[1][data].combat_type == 1) {
      
      // ****************************************
      // Unit Basic Information
      // ****************************************
      
      var unitInfo = {
        name: playerJSON[1][data].name,
        stars: playerJSON[1][data].stars,
        level: playerJSON[1][data].level,
        gear: playerJSON[1][data].gear,
        power: playerJSON[1][data].power,
        relic: playerJSON[1][data].relic_tier,
        low_skill: playerJSON[1][data].low_skill
      };
      
      // ****************************************
      // Find the unit shards required for next Upgrade
      // ****************************************
      
      shardtoupg = '';
      
      if (unitInfo.stars == 1){shardtoupg = star1;}
      if (unitInfo.stars == 2){shardtoupg = star2;}
      if (unitInfo.stars == 3){shardtoupg = star3;}
      if (unitInfo.stars == 4){shardtoupg = star4;}
      if (unitInfo.stars == 5){shardtoupg = star5;}
      if (unitInfo.stars == 6){shardtoupg = star6;}
      if (unitInfo.stars == 7){shardtoupg = star7;}
      
      // ****************************************
      // Unit Extended information
      // ****************************************
      
      localRow = farmLocation(unitInfo.name,charLocal);
      if (localRow >= 1) { 
        unitRole = charLocal[localRow][1];
        unitAlignment = charLocal[localRow][2];
        unitAffiliations = charLocal[localRow][3];
      }
      
      // ****************************************
      // Unit Farming Location
      // ****************************************
      
      farmLoc = [];
      cantLoc = [];
      lightLoc = [];
      darkLoc = [];
      fleetLoc = [];
      
      
      for (var farm=0, farming = charsLocatCheck.length; farm < farming; farm++){
        if (unitInfo.name === charsLocatCheck[farm][0]){
          if (charsLocatCheck[farm][1] === "Arena Shipments"){farmLoc.push('Squad Arena Store');}
          if (charsLocatCheck[farm][1] === "Cantina"){cantLoc.push(charsLocatCheck[farm][2]);}
          if (charsLocatCheck[farm][1] === "Cantina Shipments"){farmLoc.push('Cantina Battles Store');}
          if (charsLocatCheck[farm][1] === "Challenges"){farmLoc.push('Fleet Challenges');}
          if (charsLocatCheck[farm][1] === "Fleet Shipments"){farmLoc.push('Fleet Arena Store');}
          if (charsLocatCheck[farm][1] === "Guild Event Shop"){farmLoc.push('Guild Events Store');}
          if (charsLocatCheck[farm][1] === "Guild Shop"){farmLoc.push('Guild Store');}
          if (charsLocatCheck[farm][1] === "GW Shipments"){farmLoc.push('Galactic War Store');}
          if (charsLocatCheck[farm][1] === "Hard Modes (D)"){darkLoc.push(charsLocatCheck[farm][2]);}
          if (charsLocatCheck[farm][1] === "Hard Modes (Fleet)"){fleetLoc.push(charsLocatCheck[farm][2]);}
          if (charsLocatCheck[farm][1] === "Hard Modes (L)"){lightLoc.push(charsLocatCheck[farm][2]);}
          if (charsLocatCheck[farm][1] === "Hero's Journey"){farmLoc.push(charsLocatCheck[farm][3]);}
          if (charsLocatCheck[farm][1] === "Heroic Event"){farmLoc.push(charsLocatCheck[farm][3]);}
          if (charsLocatCheck[farm][1] === "Intro P1 (Marquee)"){farmLoc.push('Phase 1 Introduction (Marquee Event)');}
          if (charsLocatCheck[farm][1] === "Intro P2 (Crystals/Packs)"){farmLoc.push('Phase 2 Introduction (Crystals & Packs)');}
          if (charsLocatCheck[farm][1] === "Legendary Event"){farmLoc.push(charsLocatCheck[farm][3]);}
          if (charsLocatCheck[farm][1] === "Raids"){farmLoc.push(charsLocatCheck[farm][3]);}
          if (charsLocatCheck[farm][1] === "Shard Shop"){farmLoc.push('Shard Store');}
          if (charsLocatCheck[farm][1] === "Special Event"){farmLoc.push(charsLocatCheck[farm][3]);}
          if (charsLocatCheck[farm][1] === "Territory Battle"){farmLoc.push(charsLocatCheck[farm][3]);}
          farmDiff = charsLocatCheck[farm][4]
        }
      }
      
      // ****************************************
      // Push Data
      // ****************************************
      
      var unitArray = [];
      unitArray.push(unitInfo.name);         // Unit Name 
      unitArray.push(unitInfo.stars);        // Unit Star Count
      unitArray.push(unitInfo.level);        // Unit Level
      unitArray.push(unitInfo.gear);         // Unit Gear Level
      unitArray.push(unitInfo.relic);        // Unit Relics
      unitArray.push(unitInfo.power);        // Unit GP
      unitArray.push(unitInfo.low_skill);    // Unit Low Skill
      unitArray.push('');                    // Empty Shards Collected
      unitArray.push(shardtoupg);            // Unit Shards need for next Star
      unitArray.push('');                    // Shards needed to Upgraded
      unitArray.push('');                    // Shards to 7*
      unitArray.push(unitRole);              // Units Role
      unitArray.push(unitAlignment);         // Unit Alignment
      unitArray.push(unitAffiliations);      // Unit Affiliations
      unitArray.push(farmLoc.toString());     // Shipments Location
      unitArray.push(cantLoc.toString());     // Cantina Nodes Location
      unitArray.push(lightLoc.toString());    // Light Side Nodes Location
      unitArray.push(darkLoc.toString());     // Dark Side Nodes Location
      unitArray.push(fleetLoc.toString());    // Fleets Nodes Location
      unitArray.push(farmDiff);               // Farming Difficulty
      
      units.push(unitArray);
      
    }
    else
    {
      
      // ****************************************
      // Ship Basic Information
      // ****************************************
      var shipInfo = {
        name: playerJSON[1][data].name,
        stars: playerJSON[1][data].stars,
        level: playerJSON[1][data].level,
        power: playerJSON[1][data].power,
        low_skill: playerJSON[1][data].low_skill
      };
      
      // ****************************************
      // Find the ship shards required for next Upgrade
      // ****************************************
      
      shardtoupg = '';
      
      if (shipInfo.stars == 1){shardtoupg = star1;}
      if (shipInfo.stars == 2){shardtoupg = star2;}
      if (shipInfo.stars == 3){shardtoupg = star3;}
      if (shipInfo.stars == 4){shardtoupg = star4;}
      if (shipInfo.stars == 5){shardtoupg = star5;}
      if (shipInfo.stars == 6){shardtoupg = star6;}
      if (shipInfo.stars == 7){shardtoupg = star7;}
      
      // ****************************************
      // Unit Extended information
      // ****************************************
      
      localRow = farmLocation(shipInfo.name,shipLocal);
      if (localRow >= 1) { 
        unitRole = shipLocal[localRow][1];
        unitAlignment = shipLocal[localRow][2];
        unitAffiliations = shipLocal[localRow][3];
      }
      
      // ****************************************
      // Ship Farming Location
      // ****************************************
      
      farmLoc = [];
      cantLoc = [];
      lightLoc = [];
      darkLoc = [];
      fleetLoc = [];
      
      for (var sfarm=0, sfarming = shipsLocatCheck.length; sfarm < sfarming; sfarm++){
        if (shipInfo.name === shipsLocatCheck[sfarm][0]){
          if (shipsLocatCheck[sfarm][1] === "Arena Shipments"){farmLoc.push('Squad Arena Store');}
          if (shipsLocatCheck[sfarm][1] === "Cantina"){cantLoc.push(shipsLocatCheck[sfarm][2]);}
          if (shipsLocatCheck[sfarm][1] === "Cantina Shipments"){farmLoc.push('Cantina Battles Store');}
          if (shipsLocatCheck[sfarm][1] === "Challenges"){farmLoc.push('Fleet Challenges');}
          if (shipsLocatCheck[sfarm][1] === "Fleet Shipments"){farmLoc.push('Fleet Arena Store');}
          if (shipsLocatCheck[sfarm][1] === "Guild Event Shop"){farmLoc.push('Guild Events Store');}
          if (shipsLocatCheck[sfarm][1] === "Guild Shop"){farmLoc.push('Guild Store');}
          if (shipsLocatCheck[sfarm][1] === "GW Shipments"){farmLoc.push('Galactic War Store');}
          if (shipsLocatCheck[sfarm][1] === "Hard Modes (D)"){darkLoc.push(shipsLocatCheck[sfarm][2]);}
          if (shipsLocatCheck[sfarm][1] === "Hard Modes (Fleet)"){fleetLoc.push(shipsLocatCheck[sfarm][2]);}
          if (shipsLocatCheck[sfarm][1] === "Hard Modes (L)"){lightLoc.push(shipsLocatCheck[sfarm][2]);}
          if (shipsLocatCheck[sfarm][1] === "Hero's Journey"){farmLoc.push(shipsLocatCheck[sfarm][3]);}
          if (shipsLocatCheck[sfarm][1] === "Heroic Event"){farmLoc.push(shipsLocatCheck[sfarm][3]);}
          if (shipsLocatCheck[sfarm][1] === "Intro P1 (Marquee)"){farmLoc.push('Phase 1 Introduction (Marquee Event)');}
          if (shipsLocatCheck[sfarm][1] === "Intro P2 (Crystals/Packs)"){farmLoc.push('Phase 2 Introduction (Crystals & Packs)');}
          if (shipsLocatCheck[sfarm][1] === "Legendary Event"){farmLoc.push(shipsLocatCheck[sfarm][3]);}
          if (shipsLocatCheck[sfarm][1] === "Raids"){farmLoc.push(shipsLocatCheck[sfarm][3]);}
          if (shipsLocatCheck[sfarm][1] === "Shard Shop"){farmLoc.push('Shard Store');}
          if (shipsLocatCheck[sfarm][1] === "Special Event"){farmLoc.push(shipsLocatCheck[sfarm][3]);}
          if (shipsLocatCheck[sfarm][1] === "Territory Battle"){farmLoc.push(shipsLocatCheck[sfarm][3]);}
          farmDiff = shipsLocatCheck[sfarm][4];
        }
      }      
      
      var shipArray = [];
      shipArray.push(shipInfo.name);          // Ship Name
      shipArray.push(shipInfo.stars);         // Ship Star Count
      shipArray.push(shipInfo.level);         // Ship Level
      shipArray.push(shipInfo.power);         // Ship GP
      shipArray.push(shipInfo.low_skill);     // Ship Low Skill
      shipArray.push('');                     // Empty Shards Collected
      shipArray.push(shardtoupg);             // Unit Shards need for next Star
      shipArray.push('');                     // Shards needed to Upgraded
      shipArray.push('');                     // Shards to 7*
      shipArray.push(unitRole);               // Ship Role
      shipArray.push(unitAlignment);          // Ship Alignment
      shipArray.push(unitAffiliations);       // Ship Affiliations
      shipArray.push(farmLoc.toString());     // Shipments Location
      shipArray.push(cantLoc.toString());     // Cantina Nodes Location
      shipArray.push(lightLoc.toString());    // Light Side Nodes Location
      shipArray.push(darkLoc.toString());     // Dark Side Nodes Location
      shipArray.push(fleetLoc.toString());    // Fleets Nodes Location
      shipArray.push(farmDiff);               // Farming Difficulty
      
      ships.push(shipArray);
    }
  }
  
  // ****************************************
  // Add non-active characters and ships to the list
  // ****************************************
  
  var numAllUnits = CharList.getRange("A2:A").getValues().length;
  var numAllShips = ShipList.getRange("A2:A").getValues().length;
  
  var allUnits = CharList.getRange(2,1,numAllUnits).getValues();                                        
  var allShips = ShipList.getRange(2,1,numAllShips).getValues();
  
  var unlockedUnits = units.map(function(value,index) { return value[0]; });
  var unlockedShips = ships.map(function(value,index) { return value[0]; });
  
  var remainingUnits = allUnits.filter(function(e) {return unlockedUnits.filter(function(f) {return e.toString() == f.toString();}).length == 0;});
  var remainingShips = allShips.filter(function(e) {return unlockedShips.filter(function(f) {return e.toString() == f.toString();}).length == 0;});
  
  for (var ru = 0, rtotal = remainingUnits.length; ru < rtotal; ru++) {
    
    localRow = findInRow(remainingUnits[ru][0],charLocal);
    if (localRow >= 1) {
      shardtoupg = charLocal[localRow][4];
      unitRole = charLocal[localRow][1];
      unitAlignment = charLocal[localRow][2];
      unitAffiliations = charLocal[localRow][3];
    }
    
    // ****************************************
    // Unit Farming Location
    // ****************************************    
    
    farmLoc = [];
    cantLoc = [];
    lightLoc = [];
    darkLoc = [];
    fleetLoc = [];
    
    for (var nufarm=0, nufarming = charsLocatCheck.length; nufarm < nufarming; nufarm++){
      if (remainingUnits[ru][0] === charsLocatCheck[nufarm][0]){
        if (charsLocatCheck[nufarm][1] === "Arena Shipments"){farmLoc.push('Squad Arena Store');}
        if (charsLocatCheck[nufarm][1] === "Cantina"){cantLoc.push(charsLocatCheck[nufarm][2]);}
        if (charsLocatCheck[nufarm][1] === "Cantina Shipments"){farmLoc.push('Cantina Battles Store');}
        if (charsLocatCheck[nufarm][1] === "Challenges"){farmLoc.push('Fleet Challenges');}
        if (charsLocatCheck[nufarm][1] === "Fleet Shipments"){farmLoc.push('Fleet Arena Store');}
        if (charsLocatCheck[nufarm][1] === "Guild Event Shop"){farmLoc.push('Guild Events Store');}
        if (charsLocatCheck[nufarm][1] === "Guild Shop"){farmLoc.push('Guild Store');}
        if (charsLocatCheck[nufarm][1] === "GW Shipments"){farmLoc.push('Galactic War Store');}
        if (charsLocatCheck[nufarm][1] === "Hard Modes (D)"){darkLoc.push(charsLocatCheck[nufarm][2]);}
        if (charsLocatCheck[nufarm][1] === "Hard Modes (Fleet)"){fleetLoc.push(charsLocatCheck[nufarm][2]);}
        if (charsLocatCheck[nufarm][1] === "Hard Modes (L)"){lightLoc.push(charsLocatCheck[nufarm][2]);}
        if (charsLocatCheck[nufarm][1] === "Hero's Journey"){farmLoc.push(charsLocatCheck[nufarm][3]);}
        if (charsLocatCheck[nufarm][1] === "Heroic Event"){farmLoc.push(charsLocatCheck[nufarm][3]);}
        if (charsLocatCheck[nufarm][1] === "Intro P1 (Marquee)"){farmLoc.push('Phase 1 Introduction (Marquee Event)');}
        if (charsLocatCheck[nufarm][1] === "Intro P2 (Crystals/Packs)"){farmLoc.push('Phase 2 Introduction (Crystals & Packs)');}
        if (charsLocatCheck[nufarm][1] === "Legendary Event"){farmLoc.push(charsLocatCheck[nufarm][3]);}
        if (charsLocatCheck[nufarm][1] === "Raids"){farmLoc.push(charsLocatCheck[nufarm][3]);}
        if (charsLocatCheck[nufarm][1] === "Shard Shop"){farmLoc.push('Shard Store');}
        if (charsLocatCheck[nufarm][1] === "Special Event"){farmLoc.push(charsLocatCheck[nufarm][3]);}
        if (charsLocatCheck[nufarm][1] === "Territory Battle"){farmLoc.push(charsLocatCheck[nufarm][3]);}
        farmDiff = charsLocatCheck[nufarm][4]
      }
    }
    
    runit = [];
    runit.push(remainingUnits[ru][0]);  //name
    runit.push(0);                      //stars
    runit.push(0);                      //level
    runit.push(0);                      //gear 
    runit.push(0);                      //relic 
    runit.push(0);                      //gp
    runit.push(0);                      //skill
    runit.push('');                     // Empty Shards Collected
    runit.push(shardtoupg);             // Unit Shards need for next Star
    runit.push('');                     // Shards needed to Upgraded
    runit.push('');                     // Shards to 7*
    runit.push(unitRole);               // Units Role
    runit.push(unitAlignment);          // Unit Alignment
    runit.push(unitAffiliations);       // Unit Affiliations
    runit.push(farmLoc.toString());     // Shipments Location
    runit.push(cantLoc.toString());     // Cantina Nodes Location
    runit.push(lightLoc.toString());    // Light Side Nodes Location
    runit.push(darkLoc.toString());     // Dark Side Nodes Location
    runit.push(fleetLoc.toString());    // Fleets Nodes Location
    runit.push(farmDiff);               // Farming Difficulty
    
    units.push(runit);
    
  }
  
  for (var rs = 0, rstotal = remainingShips.length; rs < rstotal; rs++) {
    
    localRow = findInRow(remainingShips[rs][0],shipLocal);
    if (localRow >= 1) {
      shardtoupg = shipLocal[localRow][4];
      unitRole = shipLocal[localRow][1];
      unitAlignment = shipLocal[localRow][2];
      unitAffiliations = shipLocal[localRow][3];
    }
    
    // ****************************************
    // Ship Farming Location
    // ****************************************    
    
    farmLoc = [];
    cantLoc = [];
    lightLoc = [];
    darkLoc = [];
    fleetLoc = [];
    
    for (var nsfarm=0, nsfarming = shipsLocatCheck.length; nsfarm < nsfarming; nsfarm++){
      if (remainingShips[rs][0] === shipsLocatCheck[nsfarm][0]){
        if (shipsLocatCheck[nsfarm][1] === "Arena Shipments"){farmLoc.push('Squad Arena Store');}
        if (shipsLocatCheck[nsfarm][1] === "Cantina"){cantLoc.push(shipsLocatCheck[nsfarm][2]);}
        if (shipsLocatCheck[nsfarm][1] === "Cantina Shipments"){farmLoc.push('Cantina Battles Store');}
        if (shipsLocatCheck[nsfarm][1] === "Challenges"){farmLoc.push('Fleet Challenges');}
        if (shipsLocatCheck[nsfarm][1] === "Fleet Shipments"){farmLoc.push('Fleet Arena Store');}
        if (shipsLocatCheck[nsfarm][1] === "Guild Event Shop"){farmLoc.push('Guild Events Store');}
        if (shipsLocatCheck[nsfarm][1] === "Guild Shop"){farmLoc.push('Guild Store');}
        if (shipsLocatCheck[nsfarm][1] === "GW Shipments"){farmLoc.push('Galactic War Store');}
        if (shipsLocatCheck[nsfarm][1] === "Hard Modes (D)"){darkLoc.push(shipsLocatCheck[nsfarm][2]);}
        if (shipsLocatCheck[nsfarm][1] === "Hard Modes (Fleet)"){fleetLoc.push(shipsLocatCheck[nsfarm][2]);}
        if (shipsLocatCheck[nsfarm][1] === "Hard Modes (L)"){lightLoc.push(shipsLocatCheck[nsfarm][2]);}
        if (shipsLocatCheck[nsfarm][1] === "Hero's Journey"){farmLoc.push(shipsLocatCheck[nsfarm][3]);}
        if (shipsLocatCheck[nsfarm][1] === "Heroic Event"){farmLoc.push(shipsLocatCheck[nsfarm][3]);}
        if (shipsLocatCheck[nsfarm][1] === "Intro P1 (Marquee)"){farmLoc.push('Phase 1 Introduction (Marquee Event)');}
        if (shipsLocatCheck[nsfarm][1] === "Intro P2 (Crystals/Packs)"){farmLoc.push('Phase 2 Introduction (Crystals & Packs)');}
        if (shipsLocatCheck[nsfarm][1] === "Legendary Event"){farmLoc.push(shipsLocatCheck[nsfarm][3]);}
        if (shipsLocatCheck[nsfarm][1] === "Raids"){farmLoc.push(shipsLocatCheck[nsfarm][3]);}
        if (shipsLocatCheck[nsfarm][1] === "Shard Shop"){farmLoc.push('Shard Store');}
        if (shipsLocatCheck[nsfarm][1] === "Special Event"){farmLoc.push(shipsLocatCheck[nsfarm][3]);}
        if (shipsLocatCheck[nsfarm][1] === "Territory Battle"){farmLoc.push(shipsLocatCheck[nsfarm][3]);}
        farmDiff = shipsLocatCheck[nsfarm][4]
      }
    }
    
    
    rship = [ ];
    rship.push(remainingShips[rs][0]);  //name
    rship.push(0);                      //stars
    rship.push(0);                      //level        
    rship.push(0);                      //gp
    rship.push(0);                      //skill
    rship.push('');                     //Empty Shards Collected
    rship.push(shardtoupg);             //Shards needed for next star
    rship.push('');                     //Shards need to upgrade
    rship.push('');                     //Shards to 7*
    rship.push(unitRole);               //Ship Role
    rship.push(unitAlignment);          //Ship Aligment
    rship.push(unitAffiliations);       //Ship Affiliations
    rship.push(farmLoc.toString());     // Shipments Location
    rship.push(cantLoc.toString());     // Cantina Nodes Location
    rship.push(lightLoc.toString());    // Light Side Nodes Location
    rship.push(darkLoc.toString());     // Dark Side Nodes Location
    rship.push(fleetLoc.toString());    // Fleets Nodes Location
    rship.push(farmDiff);               // Farming Difficulty
    
    
    ships.push(rship);
  }
  
  /* Sorth the collection */
  
  //  First by name
  units.sort(function(a,b) {
    return a[0]-b[0];
  });
  ships.sort(function(a,b) {
    return a[0]-b[0];
  });      
  
  // Now by GP descending
  units.sort(function(a,b) {
    return b[5]-a[5];
  });
  ships.sort(function(a,b) {
    return b[3]-a[3];
  });
  
  // ****************************************
  // Restoring Collected Shards
  // ****************************************      
  
  for (var usc=0, ucshards = clearUnitsLength; usc < ucshards; usc++){
    if (clearUnits[usc][7] !== '') {
      for (var uusc=0, uucshards = units.length; uusc < uucshards; uusc++){
        if (clearUnits[usc][0] === units[uusc][0] && clearUnits[usc][1] === units[uusc][1]){
          units[uusc][7] = clearUnits[usc][7];
        }
      }
    }
  }
  
  for (var ssc=0, scshards = clearShipsLength; ssc < scshards; ssc++){
    if (clearShips[ssc][5] !== '') {
      for (var sssc=0, sscshards = ships.length; sssc < sscshards; sssc++){
        if (clearShips[ssc][0] === ships[sssc][0] && clearShips[ssc][1] === ships[sssc][1]){
          ships[sssc][5] = clearShips[ssc][5];
        }
      }
    }
  }
  
  // ****************************************
  // Filling Formulas
  // ****************************************      
  
  for (var uform = 0, uformulas = units.length; uform < uformulas; uform++){
    var cell = uform+2;
    units[uform][8] = '=IFERROR(IF(B'+cell+'=0, VLOOKUP($A'+cell+',charListData, 5, FALSE), IF(B'+cell+'=1,15,IF(B'+cell+'=2,25,IF(B'+cell+'=3,30,IF(B'+cell+'=4,65,IF(B'+cell+'=5,85,IF(B'+cell+'=6,100,IF(B'+cell+'=7,"MAX","")))))))),"")';
    units[uform][9] = '=IF(I'+cell+'="","",IF(I'+cell+'="MAX","",IF(I'+cell+'="-","-",I'+cell+'-H'+cell+')))';
    var neededShards = to7Stars(units[uform][1]);
    units[uform][10] = '=IFS(I'+cell+'="MAX", "0", ('+neededShards+'-H'+cell+')<0,0,('+neededShards+'-H'+cell+')>=0,'+neededShards+'-H'+cell+')';
  }
  
  for (var sform = 0, sformulas = ships.length; sform < sformulas; sform++){
    var cell = sform+2;
    ships[sform][6] = '=IFERROR(IF(B'+cell+'=0, VLOOKUP($A'+cell+',shipListData, 5, FALSE), IF(B'+cell+'=1,15,IF(B'+cell+'=2,25,IF(B'+cell+'=3,30,IF(B'+cell+'=4,65,IF(B'+cell+'=5,85,IF(B'+cell+'=6,100,IF(B'+cell+'=7,"MAX","")))))))),"")';
    ships[sform][7] = '=IF(G'+cell+'="","",IF(G'+cell+'="MAX","",IF(G'+cell+'="-","-",G'+cell+'-F'+cell+')))';
    var neededShards = to7Stars(ships[sform][1]);
    ships[sform][8] = '=IFS(G'+cell+'="MAX", "0", ('+neededShards+'-F'+cell+')<0,0,('+neededShards+'-F'+cell+')>=0,'+neededShards+'-F'+cell+')';
  }
  
  // ****************************************
  // Write Result to Sheet
  // ****************************************
  
  profile.getRange("B5").setValue(playerInfo.name);
  profile.getRange("B6").setValue(playerInfo.guildName);
  profile.getRange("B7").setValue(playerInfo.level);
  profile.getRange("B8").setValue(playerInfo.arena); 
  profile.getRange("B9").setValue(playerInfo.heroesGP).setNumberFormat("#,##0");
  profile.getRange("B10").setValue(playerInfo.shipsGP).setNumberFormat("#,##0");
  profile.getRange("B11").setValue(playerInfo.GP).setNumberFormat("#,##0");
  profile.getRange("B12").setValue(playerInfo.lastUpdate).setNumberFormat('yyy-mm-dd hh:mm');
  profile.getRange("B14").setValue(playerInfo.source);
  
  var numUnits = units.length;
  var numUnitsSize = units[0].length;
  
  var numShips = ships.length;
  var numShipsSize = ships[0].length;
  
  collectionUnit.getRange(2, 1, numUnits, numUnitsSize).setValues(units);
  collectionShip.getRange(2, 1, numShips, numShipsSize).setValues(ships);
  Utilities.sleep(5000);

  CurrFarm.getRange(9,5,7,1).clearContent();
  CurrFarm.getRange(9,7,7,2).clearContent();
  CurrFarm.getRange(18,5,7,2).clearContent();
  CurrFarm.getRange(27,5,7,2).clearContent();
  
}

function autoRequest(allyCode){
  
  var autoTryDate = new Date()
  profile.getRange("B13").setValue(autoTryDate).setNumberFormat('yyy-mm-dd hh:mm');
  
  // Launch the version check to update all the Data pulled
  versionCheck();
  
  // ****************************************
  // Function Variables
  // ****************************************
  var playerAPI = UrlFetchApp.fetch("http://farmroadmap.dynv6.net:3000/frm/player/"+allyCode);
  var playerJSON = JSON.parse(playerAPI.getContentText());
  var charLocal = CharList.getDataRange().getValues();
  var shipLocal = ShipList.getDataRange().getValues();
  var charsLocatCheck = CharLocat.getDataRange().getValues();
  var shipsLocatCheck = ShipLocat.getDataRange().getValues();
  
  var units = [];
  var ships = [];
  var runit = [];
  var rship = [];
  var star1 = 15;
  var star2 = 25;
  var star3 = 30;
  var star4 = 65;
  var star5 = 85;
  var star6 = 100;
  var star7 = 'MAX';
  var unitRole;
  var unitAlignment;
  var unitAffiliations;
  var localRow;
  var shardtoupg;
  var farmLoc;
  var cantLoc;
  var lightLoc;
  var darkLoc;
  var fleetLoc;
  var farmDiff;
  
  // ****************************************
  // Backup and Clear Current Units List
  // ****************************************
  
  var clearUnits = collectionUnit.getDataRange().getValues();
  var clearUnitsLength = clearUnits.length;
  var clearShips = collectionShip.getDataRange().getValues();
  var clearShipsLength = clearShips.length;
  
  if (clearUnitsLength > 2) {
    collectionUnit.deleteRows(2, clearUnitsLength-2);
    collectionUnit.getRange(2,1,1,20).clearContent();
  }
  
  if (clearShipsLength > 2) {
    collectionShip.deleteRows(2, clearShipsLength-2);
    collectionShip.getRange(2,1,1,18).clearContent();
  }
  
  // ****************************************
  // Getting Player Information
  // ****************************************
  
  var dateString = playerJSON[0].last_updated;
  
  if(!isNaN(dateString)){
    var toFix = new Date(dateString);
    var dateFixed = Utilities.formatDate(toFix, ssTz, 'yyy-MM-dd hh:mm');
  }
  else {
    
    var toFix = 23 - dateString.length;
    var Fixed = dateString.slice(0, toFix)+'Z';
    var dateSliced = new Date(Fixed);
    var dateFixed = Utilities.formatDate(dateSliced, ssTz, 'yyy-MM-dd hh:mm');
  }
  
  var playerInfo = {
    name: playerJSON[0].name,
    guildName: playerJSON[0].guild_name,
    level: playerJSON[0].level,
    arena: playerJSON[0].arena_rank,
    heroesGP: playerJSON[0].character_galactic_power,
    shipsGP: playerJSON[0].ship_galactic_power,
    GP: playerJSON[0].galactic_power,
    lastUpdate : dateFixed,
    source : playerJSON[0].source
  };
  
  for ( var data=0, list = playerJSON[1].length; data < list; data++){
    
    // ****************************************
    // Separate Units and Ships
    // ****************************************    
    
    if (playerJSON[1][data].combat_type == 1) {
      
      // ****************************************
      // Unit Basic Information
      // ****************************************
      
      var unitInfo = {
        name: playerJSON[1][data].name,
        stars: playerJSON[1][data].stars,
        level: playerJSON[1][data].level,
        gear: playerJSON[1][data].gear,
        power: playerJSON[1][data].power,
        relic: playerJSON[1][data].relic_tier,
        low_skill: playerJSON[1][data].low_skill
      };
      
      // ****************************************
      // Find the unit shards required for next Upgrade
      // ****************************************
      
      shardtoupg = '';
      
      if (unitInfo.stars == 1){shardtoupg = star1;}
      if (unitInfo.stars == 2){shardtoupg = star2;}
      if (unitInfo.stars == 3){shardtoupg = star3;}
      if (unitInfo.stars == 4){shardtoupg = star4;}
      if (unitInfo.stars == 5){shardtoupg = star5;}
      if (unitInfo.stars == 6){shardtoupg = star6;}
      if (unitInfo.stars == 7){shardtoupg = star7;}
      
      // ****************************************
      // Unit Extended information
      // ****************************************
      
      localRow = farmLocation(unitInfo.name,charLocal);
      if (localRow >= 1) { 
        unitRole = charLocal[localRow][1];
        unitAlignment = charLocal[localRow][2];
        unitAffiliations = charLocal[localRow][3];
      }
      
      // ****************************************
      // Unit Farming Location
      // ****************************************
      
      farmLoc = [];
      cantLoc = [];
      lightLoc = [];
      darkLoc = [];
      fleetLoc = [];
      
      
      for (var farm=0, farming = charsLocatCheck.length; farm < farming; farm++){
        if (unitInfo.name === charsLocatCheck[farm][0]){
          if (charsLocatCheck[farm][1] === "Arena Shipments"){farmLoc.push('Squad Arena Store');}
          if (charsLocatCheck[farm][1] === "Cantina"){cantLoc.push(charsLocatCheck[farm][2]);}
          if (charsLocatCheck[farm][1] === "Cantina Shipments"){farmLoc.push('Cantina Battles Store');}
          if (charsLocatCheck[farm][1] === "Challenges"){farmLoc.push('Fleet Challenges');}
          if (charsLocatCheck[farm][1] === "Fleet Shipments"){farmLoc.push('Fleet Arena Store');}
          if (charsLocatCheck[farm][1] === "Guild Event Shop"){farmLoc.push('Guild Events Store');}
          if (charsLocatCheck[farm][1] === "Guild Shop"){farmLoc.push('Guild Store');}
          if (charsLocatCheck[farm][1] === "GW Shipments"){farmLoc.push('Galactic War Store');}
          if (charsLocatCheck[farm][1] === "Hard Modes (D)"){darkLoc.push(charsLocatCheck[farm][2]);}
          if (charsLocatCheck[farm][1] === "Hard Modes (Fleet)"){fleetLoc.push(charsLocatCheck[farm][2]);}
          if (charsLocatCheck[farm][1] === "Hard Modes (L)"){lightLoc.push(charsLocatCheck[farm][2]);}
          if (charsLocatCheck[farm][1] === "Hero's Journey"){farmLoc.push(charsLocatCheck[farm][3]);}
          if (charsLocatCheck[farm][1] === "Heroic Event"){farmLoc.push(charsLocatCheck[farm][3]);}
          if (charsLocatCheck[farm][1] === "Intro P1 (Marquee)"){farmLoc.push('Phase 1 Introduction (Marquee Event)');}
          if (charsLocatCheck[farm][1] === "Intro P2 (Crystals/Packs)"){farmLoc.push('Phase 2 Introduction (Crystals & Packs)');}
          if (charsLocatCheck[farm][1] === "Legendary Event"){farmLoc.push(charsLocatCheck[farm][3]);}
          if (charsLocatCheck[farm][1] === "Raids"){farmLoc.push(charsLocatCheck[farm][3]);}
          if (charsLocatCheck[farm][1] === "Shard Shop"){farmLoc.push('Shard Store');}
          if (charsLocatCheck[farm][1] === "Special Event"){farmLoc.push(charsLocatCheck[farm][3]);}
          if (charsLocatCheck[farm][1] === "Territory Battle"){farmLoc.push(charsLocatCheck[farm][3]);}
          farmDiff = charsLocatCheck[farm][4]
        }
      }
      
      // ****************************************
      // Push Data
      // ****************************************
      
      var unitArray = [];
      unitArray.push(unitInfo.name);         // Unit Name 
      unitArray.push(unitInfo.stars);        // Unit Star Count
      unitArray.push(unitInfo.level);        // Unit Level
      unitArray.push(unitInfo.gear);         // Unit Gear Level
      unitArray.push(unitInfo.relic);        // Unit Relics
      unitArray.push(unitInfo.power);        // Unit GP
      unitArray.push(unitInfo.low_skill);    // Unit Low Skill
      unitArray.push('');                    // Empty Shards Collected
      unitArray.push(shardtoupg);            // Unit Shards need for next Star
      unitArray.push('');                    // Shards needed to Upgraded
      unitArray.push('');                    // Shards to 7*
      unitArray.push(unitRole);              // Units Role
      unitArray.push(unitAlignment);         // Unit Alignment
      unitArray.push(unitAffiliations);      // Unit Affiliations
      unitArray.push(farmLoc.toString());     // Shipments Location
      unitArray.push(cantLoc.toString());     // Cantina Nodes Location
      unitArray.push(lightLoc.toString());    // Light Side Nodes Location
      unitArray.push(darkLoc.toString());     // Dark Side Nodes Location
      unitArray.push(fleetLoc.toString());    // Fleets Nodes Location
      unitArray.push(farmDiff);               // Farming Difficulty
      
      units.push(unitArray);
      
    }
    else
    {
      
      // ****************************************
      // Ship Basic Information
      // ****************************************
      var shipInfo = {
        name: playerJSON[1][data].name,
        stars: playerJSON[1][data].stars,
        level: playerJSON[1][data].level,
        power: playerJSON[1][data].power,
        low_skill: playerJSON[1][data].low_skill
      };
      
      // ****************************************
      // Find the ship shards required for next Upgrade
      // ****************************************
      
      shardtoupg = '';
      
      if (shipInfo.stars == 1){shardtoupg = star1;}
      if (shipInfo.stars == 2){shardtoupg = star2;}
      if (shipInfo.stars == 3){shardtoupg = star3;}
      if (shipInfo.stars == 4){shardtoupg = star4;}
      if (shipInfo.stars == 5){shardtoupg = star5;}
      if (shipInfo.stars == 6){shardtoupg = star6;}
      if (shipInfo.stars == 7){shardtoupg = star7;}
      
      // ****************************************
      // Unit Extended information
      // ****************************************
      
      localRow = farmLocation(shipInfo.name,shipLocal);
      if (localRow >= 1) { 
        unitRole = shipLocal[localRow][1];
        unitAlignment = shipLocal[localRow][2];
        unitAffiliations = shipLocal[localRow][3];
      }
      
      // ****************************************
      // Ship Farming Location
      // ****************************************
      
      farmLoc = [];
      cantLoc = [];
      lightLoc = [];
      darkLoc = [];
      fleetLoc = [];
      
      for (var sfarm=0, sfarming = shipsLocatCheck.length; sfarm < sfarming; sfarm++){
        if (shipInfo.name === shipsLocatCheck[sfarm][0]){
          if (shipsLocatCheck[sfarm][1] === "Arena Shipments"){farmLoc.push('Squad Arena Store');}
          if (shipsLocatCheck[sfarm][1] === "Cantina"){cantLoc.push(shipsLocatCheck[sfarm][2]);}
          if (shipsLocatCheck[sfarm][1] === "Cantina Shipments"){farmLoc.push('Cantina Battles Store');}
          if (shipsLocatCheck[sfarm][1] === "Challenges"){farmLoc.push('Fleet Challenges');}
          if (shipsLocatCheck[sfarm][1] === "Fleet Shipments"){farmLoc.push('Fleet Arena Store');}
          if (shipsLocatCheck[sfarm][1] === "Guild Event Shop"){farmLoc.push('Guild Events Store');}
          if (shipsLocatCheck[sfarm][1] === "Guild Shop"){farmLoc.push('Guild Store');}
          if (shipsLocatCheck[sfarm][1] === "GW Shipments"){farmLoc.push('Galactic War Store');}
          if (shipsLocatCheck[sfarm][1] === "Hard Modes (D)"){darkLoc.push(shipsLocatCheck[sfarm][2]);}
          if (shipsLocatCheck[sfarm][1] === "Hard Modes (Fleet)"){fleetLoc.push(shipsLocatCheck[sfarm][2]);}
          if (shipsLocatCheck[sfarm][1] === "Hard Modes (L)"){lightLoc.push(shipsLocatCheck[sfarm][2]);}
          if (shipsLocatCheck[sfarm][1] === "Hero's Journey"){farmLoc.push(shipsLocatCheck[sfarm][3]);}
          if (shipsLocatCheck[sfarm][1] === "Heroic Event"){farmLoc.push(shipsLocatCheck[sfarm][3]);}
          if (shipsLocatCheck[sfarm][1] === "Intro P1 (Marquee)"){farmLoc.push('Phase 1 Introduction (Marquee Event)');}
          if (shipsLocatCheck[sfarm][1] === "Intro P2 (Crystals/Packs)"){farmLoc.push('Phase 2 Introduction (Crystals & Packs)');}
          if (shipsLocatCheck[sfarm][1] === "Legendary Event"){farmLoc.push(shipsLocatCheck[sfarm][3]);}
          if (shipsLocatCheck[sfarm][1] === "Raids"){farmLoc.push(shipsLocatCheck[sfarm][3]);}
          if (shipsLocatCheck[sfarm][1] === "Shard Shop"){farmLoc.push('Shard Store');}
          if (shipsLocatCheck[sfarm][1] === "Special Event"){farmLoc.push(shipsLocatCheck[sfarm][3]);}
          if (shipsLocatCheck[sfarm][1] === "Territory Battle"){farmLoc.push(shipsLocatCheck[sfarm][3]);}
          farmDiff = shipsLocatCheck[sfarm][4];
        }
      }      
      
      var shipArray = [];
      shipArray.push(shipInfo.name);          // Ship Name 
      shipArray.push(shipInfo.stars);         // Ship Star Count
      shipArray.push(shipInfo.level);         // Ship Level
      shipArray.push(shipInfo.power);         // Ship GP
      shipArray.push(shipInfo.low_skill);     // Ship Low Skill
      shipArray.push('');                     // Empty Shards Collected
      shipArray.push(shardtoupg);             // Unit Shards need for next Star
      shipArray.push('');                     // Shards needed to Upgraded
      shipArray.push('');                     // Shards to 7*
      shipArray.push(unitRole);               // Ship Role
      shipArray.push(unitAlignment);          // Ship Alignment
      shipArray.push(unitAffiliations);       // Ship Affiliations
      shipArray.push(farmLoc.toString());     // Shipments Location
      shipArray.push(cantLoc.toString());     // Cantina Nodes Location
      shipArray.push(lightLoc.toString());    // Light Side Nodes Location
      shipArray.push(darkLoc.toString());     // Dark Side Nodes Location
      shipArray.push(fleetLoc.toString());    // Fleets Nodes Location
      shipArray.push(farmDiff);               // Farming Difficulty
      
      ships.push(shipArray);
    }
  }
  
  // ****************************************
  // Add non-active characters and ships to the list
  // ****************************************
  
  var numAllUnits = CharList.getRange("A2:A").getValues().length;
  var numAllShips = ShipList.getRange("A2:A").getValues().length;
  
  var allUnits = CharList.getRange(2,1,numAllUnits).getValues();                                        
  var allShips = ShipList.getRange(2,1,numAllShips).getValues();
  
  var unlockedUnits = units.map(function(value,index) { return value[0]; });
  var unlockedShips = ships.map(function(value,index) { return value[0]; });
  
  var remainingUnits = allUnits.filter(function(e) {return unlockedUnits.filter(function(f) {return e.toString() == f.toString();}).length == 0;});
  var remainingShips = allShips.filter(function(e) {return unlockedShips.filter(function(f) {return e.toString() == f.toString();}).length == 0;});
  
  for (var ru = 0, rtotal = remainingUnits.length; ru < rtotal; ru++) {
    
    localRow = findInRow(remainingUnits[ru][0],charLocal);
    if (localRow >= 1) {
      shardtoupg = charLocal[localRow][4];
      unitRole = charLocal[localRow][1];
      unitAlignment = charLocal[localRow][2];
      unitAffiliations = charLocal[localRow][3];
    }
    
    // ****************************************
    // Unit Farming Location
    // ****************************************    
    
    farmLoc = [];
    cantLoc = [];
    lightLoc = [];
    darkLoc = [];
    fleetLoc = [];
    
    for (var nufarm=0, nufarming = charsLocatCheck.length; nufarm < nufarming; nufarm++){
      if (remainingUnits[ru][0] === charsLocatCheck[nufarm][0]){
        if (charsLocatCheck[nufarm][1] === "Arena Shipments"){farmLoc.push('Squad Arena Store');}
        if (charsLocatCheck[nufarm][1] === "Cantina"){cantLoc.push(charsLocatCheck[nufarm][2]);}
        if (charsLocatCheck[nufarm][1] === "Cantina Shipments"){farmLoc.push('Cantina Battles Store');}
        if (charsLocatCheck[nufarm][1] === "Challenges"){farmLoc.push('Fleet Challenges');}
        if (charsLocatCheck[nufarm][1] === "Fleet Shipments"){farmLoc.push('Fleet Arena Store');}
        if (charsLocatCheck[nufarm][1] === "Guild Event Shop"){farmLoc.push('Guild Events Store');}
        if (charsLocatCheck[nufarm][1] === "Guild Shop"){farmLoc.push('Guild Store');}
        if (charsLocatCheck[nufarm][1] === "GW Shipments"){farmLoc.push('Galactic War Store');}
        if (charsLocatCheck[nufarm][1] === "Hard Modes (D)"){darkLoc.push(charsLocatCheck[nufarm][2]);}
        if (charsLocatCheck[nufarm][1] === "Hard Modes (Fleet)"){fleetLoc.push(charsLocatCheck[nufarm][2]);}
        if (charsLocatCheck[nufarm][1] === "Hard Modes (L)"){lightLoc.push(charsLocatCheck[nufarm][2]);}
        if (charsLocatCheck[nufarm][1] === "Hero's Journey"){farmLoc.push(charsLocatCheck[nufarm][3]);}
        if (charsLocatCheck[nufarm][1] === "Heroic Event"){farmLoc.push(charsLocatCheck[nufarm][3]);}
        if (charsLocatCheck[nufarm][1] === "Intro P1 (Marquee)"){farmLoc.push('Phase 1 Introduction (Marquee Event)');}
        if (charsLocatCheck[nufarm][1] === "Intro P2 (Crystals/Packs)"){farmLoc.push('Phase 2 Introduction (Crystals & Packs)');}
        if (charsLocatCheck[nufarm][1] === "Legendary Event"){farmLoc.push(charsLocatCheck[nufarm][3]);}
        if (charsLocatCheck[nufarm][1] === "Raids"){farmLoc.push(charsLocatCheck[nufarm][3]);}
        if (charsLocatCheck[nufarm][1] === "Shard Shop"){farmLoc.push('Shard Store');}
        if (charsLocatCheck[nufarm][1] === "Special Event"){farmLoc.push(charsLocatCheck[nufarm][3]);}
        if (charsLocatCheck[nufarm][1] === "Territory Battle"){farmLoc.push(charsLocatCheck[nufarm][3]);}
        farmDiff = charsLocatCheck[nufarm][4]
      }
    }
    
    runit = [];
    runit.push(remainingUnits[ru][0]);  //name
    runit.push(0);                      //stars
    runit.push(0);                      //level
    runit.push(0);                      //gear 
    runit.push(0);                      //relic 
    runit.push(0);                      //gp
    runit.push(0);                      //skill
    runit.push('');                     // Empty Shards Collected
    runit.push(shardtoupg);             // Unit Shards need for next Star
    runit.push('');                     // Shards needed to Upgraded
    runit.push('');                     // Shards to 7*
    runit.push(unitRole);               // Units Role
    runit.push(unitAlignment);          // Unit Alignment
    runit.push(unitAffiliations);       // Unit Affiliations
    runit.push(farmLoc.toString());     // Shipments Location
    runit.push(cantLoc.toString());     // Cantina Nodes Location
    runit.push(lightLoc.toString());    // Light Side Nodes Location
    runit.push(darkLoc.toString());     // Dark Side Nodes Location
    runit.push(fleetLoc.toString());    // Fleets Nodes Location
    runit.push(farmDiff);               // Farming Difficulty
    
    units.push(runit);
    
  }
  
  for (var rs = 0, rstotal = remainingShips.length; rs < rstotal; rs++) {
    
    localRow = findInRow(remainingShips[rs][0],shipLocal);
    if (localRow >= 1) {
      shardtoupg = shipLocal[localRow][4];
      unitRole = shipLocal[localRow][1];
      unitAlignment = shipLocal[localRow][2];
      unitAffiliations = shipLocal[localRow][3];
    }
    
    // ****************************************
    // Ship Farming Location
    // ****************************************    
    
    farmLoc = [];
    cantLoc = [];
    lightLoc = [];
    darkLoc = [];
    fleetLoc = [];
    
    for (var nsfarm=0, nsfarming = shipsLocatCheck.length; nsfarm < nsfarming; nsfarm++){
      if (remainingShips[rs][0] === shipsLocatCheck[nsfarm][0]){
        if (shipsLocatCheck[nsfarm][1] === "Arena Shipments"){farmLoc.push('Squad Arena Store');}
        if (shipsLocatCheck[nsfarm][1] === "Cantina"){cantLoc.push(shipsLocatCheck[nsfarm][2]);}
        if (shipsLocatCheck[nsfarm][1] === "Cantina Shipments"){farmLoc.push('Cantina Battles Store');}
        if (shipsLocatCheck[nsfarm][1] === "Challenges"){farmLoc.push('Fleet Challenges');}
        if (shipsLocatCheck[nsfarm][1] === "Fleet Shipments"){farmLoc.push('Fleet Arena Store');}
        if (shipsLocatCheck[nsfarm][1] === "Guild Event Shop"){farmLoc.push('Guild Events Store');}
        if (shipsLocatCheck[nsfarm][1] === "Guild Shop"){farmLoc.push('Guild Store');}
        if (shipsLocatCheck[nsfarm][1] === "GW Shipments"){farmLoc.push('Galactic War Store');}
        if (shipsLocatCheck[nsfarm][1] === "Hard Modes (D)"){darkLoc.push(shipsLocatCheck[nsfarm][2]);}
        if (shipsLocatCheck[nsfarm][1] === "Hard Modes (Fleet)"){fleetLoc.push(shipsLocatCheck[nsfarm][2]);}
        if (shipsLocatCheck[nsfarm][1] === "Hard Modes (L)"){lightLoc.push(shipsLocatCheck[nsfarm][2]);}
        if (shipsLocatCheck[nsfarm][1] === "Hero's Journey"){farmLoc.push(shipsLocatCheck[nsfarm][3]);}
        if (shipsLocatCheck[nsfarm][1] === "Heroic Event"){farmLoc.push(shipsLocatCheck[nsfarm][3]);}
        if (shipsLocatCheck[nsfarm][1] === "Intro P1 (Marquee)"){farmLoc.push('Phase 1 Introduction (Marquee Event)');}
        if (shipsLocatCheck[nsfarm][1] === "Intro P2 (Crystals/Packs)"){farmLoc.push('Phase 2 Introduction (Crystals & Packs)');}
        if (shipsLocatCheck[nsfarm][1] === "Legendary Event"){farmLoc.push(shipsLocatCheck[nsfarm][3]);}
        if (shipsLocatCheck[nsfarm][1] === "Raids"){farmLoc.push(shipsLocatCheck[nsfarm][3]);}
        if (shipsLocatCheck[nsfarm][1] === "Shard Shop"){farmLoc.push('Shard Store');}
        if (shipsLocatCheck[nsfarm][1] === "Special Event"){farmLoc.push(shipsLocatCheck[nsfarm][3]);}
        if (shipsLocatCheck[nsfarm][1] === "Territory Battle"){farmLoc.push(shipsLocatCheck[nsfarm][3]);}
        farmDiff = shipsLocatCheck[nsfarm][4]
      }
    }
    
    
    rship = [ ];
    rship.push(remainingShips[rs][0]);  //name
    rship.push(0);                      //stars
    rship.push(0);                      //level        
    rship.push(0);                      //gp
    rship.push(0);                      //skill
    rship.push('');                     //Empty Shards Collected
    rship.push(shardtoupg);             //Shards needed for next star
    rship.push('');                     //Shards need to upgrade
    rship.push('');                     //Shards to 7*
    rship.push(unitRole);               //Ship Role
    rship.push(unitAlignment);          //Ship Aligment
    rship.push(unitAffiliations);       //Ship Affiliations
    rship.push(farmLoc.toString());     // Shipments Location
    rship.push(cantLoc.toString());     // Cantina Nodes Location
    rship.push(lightLoc.toString());    // Light Side Nodes Location
    rship.push(darkLoc.toString());     // Dark Side Nodes Location
    rship.push(fleetLoc.toString());    // Fleets Nodes Location
    rship.push(farmDiff);               // Farming Difficulty
    
    
    ships.push(rship);
  }
  
  /* Sorth the collection */
  
  //  First by name
  units.sort(function(a,b) {
    return a[0]-b[0];
  });
  ships.sort(function(a,b) {
    return a[0]-b[0];
  });      
  
  // Now by GP descending
  units.sort(function(a,b) {
    return b[5]-a[5];
  });
  ships.sort(function(a,b) {
    return b[3]-a[3];
  });
  
  // ****************************************
  // Restoring Collected Shards
  // ****************************************      
  
  for (var usc=0, ucshards = clearUnitsLength; usc < ucshards; usc++){
    if (clearUnits[usc][7] !== '') {
      for (var uusc=0, uucshards = units.length; uusc < uucshards; uusc++){
        if (clearUnits[usc][0] === units[uusc][0] && clearUnits[usc][1] === units[uusc][1]){
          units[uusc][7] = clearUnits[usc][7];
        }
      }
    }
  }
  
  for (var ssc=0, scshards = clearShipsLength; ssc < scshards; ssc++){
    if (clearShips[ssc][5] !== '') {
      for (var sssc=0, sscshards = ships.length; sssc < sscshards; sssc++){
        if (clearShips[ssc][0] === ships[sssc][0] && clearShips[ssc][1] === ships[sssc][1]){
          ships[sssc][5] = clearShips[ssc][5];
        }
      }
    }
  }
  
  // ****************************************
  // Filling Formulas
  // ****************************************      
  
  for (var uform = 0, uformulas = units.length; uform < uformulas; uform++){
    var cell = uform+2;
    units[uform][8] = '=IFERROR(IF(B'+cell+'=0, VLOOKUP($A'+cell+',charListData, 5, FALSE), IF(B'+cell+'=1,15,IF(B'+cell+'=2,25,IF(B'+cell+'=3,30,IF(B'+cell+'=4,65,IF(B'+cell+'=5,85,IF(B'+cell+'=6,100,IF(B'+cell+'=7,"MAX","")))))))),"")';
    units[uform][9] = '=IF(I'+cell+'="","",IF(I'+cell+'="MAX","",IF(I'+cell+'="-","-",I'+cell+'-H'+cell+')))';
    var neededShards = to7Stars(units[uform][1]);
    units[uform][10] = '=IFS(I'+cell+'="MAX", "0", ('+neededShards+'-H'+cell+')<0,0,('+neededShards+'-H'+cell+')>=0,'+neededShards+'-H'+cell+')';
  }
  
  for (var sform = 0, sformulas = ships.length; sform < sformulas; sform++){
    var cell = sform+2;
    ships[sform][6] = '=IFERROR(IF(B'+cell+'=0, VLOOKUP($A'+cell+',shipListData, 5, FALSE), IF(B'+cell+'=1,15,IF(B'+cell+'=2,25,IF(B'+cell+'=3,30,IF(B'+cell+'=4,65,IF(B'+cell+'=5,85,IF(B'+cell+'=6,100,IF(B'+cell+'=7,"MAX","")))))))),"")';
    ships[sform][7] = '=IF(G'+cell+'="","",IF(G'+cell+'="MAX","",IF(G'+cell+'="-","-",G'+cell+'-F'+cell+')))';
    var neededShards = to7Stars(ships[sform][1]);
    ships[sform][8] = '=IFS(G'+cell+'="MAX", "0", ('+neededShards+'-F'+cell+')<0,0,('+neededShards+'-F'+cell+')>=0,'+neededShards+'-F'+cell+')';
  }
  
  // ****************************************
  // Write Result to Sheet
  // ****************************************
  
  profile.getRange("B5").setValue(playerInfo.name);
  profile.getRange("B6").setValue(playerInfo.guildName);
  profile.getRange("B7").setValue(playerInfo.level);
  profile.getRange("B8").setValue(playerInfo.arena); 
  profile.getRange("B9").setValue(playerInfo.heroesGP).setNumberFormat("#,##0");
  profile.getRange("B10").setValue(playerInfo.shipsGP).setNumberFormat("#,##0");
  profile.getRange("B11").setValue(playerInfo.GP).setNumberFormat("#,##0");
  profile.getRange("B12").setValue(playerInfo.lastUpdate).setNumberFormat('yyy-mm-dd hh:mm');
  profile.getRange("B14").setValue(playerInfo.source);
  
  var numUnits = units.length;
  var numUnitsSize = units[0].length;
  
  var numShips = ships.length;
  var numShipsSize = ships[0].length;
  
  collectionUnit.getRange(2, 1, numUnits, numUnitsSize).setValues(units);
  collectionShip.getRange(2, 1, numShips, numShipsSize).setValues(ships);
  Utilities.sleep(5000);

  CurrFarm.getRange(9,5,7,1).clearContent();
  CurrFarm.getRange(9,7,7,2).clearContent();
  CurrFarm.getRange(18,5,7,2).clearContent();
  CurrFarm.getRange(27,5,7,2).clearContent();
  
}
