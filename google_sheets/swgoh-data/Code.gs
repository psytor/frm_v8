//******************************
// Main Variables
//******************************

var ssTz = SpreadsheetApp.getActive().getSpreadsheetTimeZone();
var ss = SpreadsheetApp.getActiveSpreadsheet();
var charsData = ss.getSheetByName("CharsData");
var shipsData = ss.getSheetByName("ShipsData");
var shardsLookup = ss.getSheetByName("Shards to Unlock");
var version = ss.getSheetByName('DataVersions');
var logs1 = ss.getSheetByName("Logs1month");
var logs2 = ss.getSheetByName("Logs2months");
var sendMail = [];


//  The Funtion was being timed on google to run every 12 hours

function updateUnits(){
  
  var charUnits = [];
  var shipUnits = [];

  var oldCharsData = charsData.getDataRange().getValues();
  var oldShipsData = shipsData.getDataRange().getValues();  
  var oldCharsLength = oldCharsData.length;
  var oldShipsLenght = oldShipsData.length;
  
  if (oldCharsLength > 1){
    charsData.deleteRows(2, oldCharsLength-2);
    charsData.getRange(2,1,1,8).clearContent();
  }
  
  if (oldShipsLenght > 1){
    shipsData.deleteRows(2, oldShipsLenght-2);
    shipsData.getRange(2,1,1,8).clearContent();
  }
  
  var charsAPI = UrlFetchApp.fetch("http://farmroadmap.link:3001/characters");
  var charsJSON = JSON.parse(charsAPI.getContentText());
  var shipsAPI = UrlFetchApp.fetch("http://farmroadmap.link:3001/ships");
  var shipsJSON = JSON.parse(shipsAPI.getContentText());
  
  // Logging update
  var logCharData = logs1.getDataRange().getValues();
  var logCharLength = logCharData.length;
  if(logCharLength >= 63){
    
    // Clean logs after 1 month
    logs2.getDataRange().clearContent();
    logs2.getRange(1,1,logCharLength,5).setValues(logCharData);
    logs1.getRange(2,1,logCharLength-1,5).clearContent();
    
    // New Characters Logs
    logs1.getRange(2,1).setValue("Date").setNumberFormat('@STRING@');
    logs1.getRange(2,2).setValue(Utilities.formatDate(new Date(), ssTz, "yyyy/MM/dd hh:mm"));
    logs1.getRange(3,1).setValue("New Characters").setNumberFormat('@STRING@');
    var charNewUnits = charsJSON.length - (oldCharsLength-1);
    logs1.getRange(3,2).setValue(charNewUnits).setNumberFormat('#,##0');
    
    // New Ships Logs
    logs1.getRange(2,4).setValue("Date").setNumberFormat('@STRING@');
    logs1.getRange(2,5).setValue(Utilities.formatDate(new Date(), ssTz, "yyyy/MM/dd hh:mm"));
    logs1.getRange(3,4).setValue("New Ships").setNumberFormat('@STRING@');
    var shipNewUnits = shipsJSON.length - (oldShipsData.length-1);
    logs1.getRange(3,5).setValue(shipNewUnits).setNumberFormat('#,##0');
    
  } else {
    
    // Characters Log
    logs1.getRange(logCharLength+1,1).setValue("Date").setNumberFormat('@STRING@');
    logs1.getRange(logCharLength+1,2).setValue(Utilities.formatDate(new Date(), ssTz, "yyyy/MM/dd hh:mm"));
    logs1.getRange(logCharLength+2,1).setValue("New Units").setNumberFormat('@STRING@');
    var charNewUnits = charsJSON.length - (oldCharsData.length-1);
    logs1.getRange(logCharLength+2,2).setValue(charNewUnits).setNumberFormat('#,##0');
    
    // Ships Logs
    logs1.getRange(logCharLength+1,4).setValue("Date").setNumberFormat('@STRING@');
    logs1.getRange(logCharLength+1,5).setValue(Utilities.formatDate(new Date(), ssTz, "yyyy/MM/dd hh:mm"));
    logs1.getRange(logCharLength+2,4).setValue("New Ships").setNumberFormat('@STRING@');
    var shipNewUnits = shipsJSON.length - (oldShipsData.length-1);
    logs1.getRange(logCharLength+2,5).setValue(shipNewUnits).setNumberFormat('#,##0');
  }
  
  // Set email to be sent
  if (charNewUnits !== 0) {sendMail.push('Character');}
  
  for (var i = 0, chars = charsJSON.length; i < chars; i++){
    
    var charInfo = [];
    var charRole = '';
    
    // Set the unit information
    if (charsJSON[i].role === 'Leader'){
      for(var role = 0, roles = charsJSON[i].categories.length; role < roles; role++){
        if(charsJSON[i].categories[role] == "Attacker"){charRole = "Attacker"} else {
          if(charsJSON[i].categories[role] == "Healer"){charRole = "Healer"} else {
            if(charsJSON[i].categories[role] == "Support"){charRole = "Support"} else {
              if(charsJSON[i].categories[role] == "Tank"){charRole = "Tank"}
            }
          }
        }
      }
    } else {charRole = charsJSON[i].role}
    
    // Unit name
    charInfo.push(charsJSON[i].name);
    // Unit Base ID (For Translation)
    charInfo.push(charsJSON[i].base_id);
    // Unit URL (for possible future use)
    charInfo.push(charsJSON[i].url);
    // Unit image (for possible future use)
    charInfo.push(charsJSON[i].image);
    // Unit Alignment
    charInfo.push(charsJSON[i].alignment);
    // Unit Categories
    var categories = [];
    for (var j=0, cats = charsJSON[i].categories.length; j < cats; j++) {
      if(charsJSON[i].categories[j] != "Attacker" && charsJSON[i].categories[j] != "Healer" && charsJSON[i].categories[j] != "Support" && charsJSON[i].categories[j] != "Tank"){
        categories.push(charsJSON[i].categories[j]);
      }
    }
    charInfo.push(categories.toString());
    // Unit Role
    charInfo.push(charRole);
    // Unit Shards to Activate
    charInfo.push(charsJSON[i].activate_shard_count);
    
    // Send data to array
    charUnits.push(charInfo);
  }
  
  /* Sorth the collection */
  
  //  by name
  charUnits.sort(function(a,b) {
    return a[0]-b[0];
  });
  
  var numUnits = charUnits.length;
  var numUnitsSize = charUnits[0].length;
  
  charsData.getRange(2, 1, numUnits, numUnitsSize).setValues(charUnits);
  
  // Set email to be sent
  if (shipNewUnits !== 0) { sendMail.push('Ship');}
  
  for (var i = 0, shipList = shipsJSON.length; i < shipList; i++){
  
    var shipInfo = [];
    
    // Set Ships information
    
    // name (Real Character name)
    shipInfo.push(shipsJSON[i].name);
    // base_id (For Localization)
    shipInfo.push(shipsJSON[i].base_id);
    // url (For Possible future use)
    shipInfo.push(shipsJSON[i].url);
    // image (For Possible future use)
    shipInfo.push(shipsJSON[i].image);
    // alignment
    shipInfo.push(shipsJSON[i].alignment);
    // categories for affiliations
    var categories = [];
    for (var j=0, cats = shipsJSON[i].categories.length; j < cats; j++) {
      if(shipsJSON[i].categories[j] != "Capital Ship" && shipsJSON[i].categories[j] != "Attacker" && shipsJSON[i].categories[j] != "Healer" && shipsJSON[i].categories[j] != "Support" && shipsJSON[i].categories[j] != "Tank"){
        categories.push(shipsJSON[i].categories[j]);
      }
    }
    shipInfo.push(categories.toString());
    // role
    shipInfo.push(shipsJSON[i].role);
    // Unit Shards to Activate
    shipInfo.push(shipsJSON[i].activate_shard_count); 
    
    shipUnits.push(shipInfo);
  }
  
  /* Sorth the collection */
  
  //  by name
  shipUnits.sort(function(a,b) {
    return a[0]-b[0];
  });
  
  var numShips = shipUnits.length;
  var numShipsSize = shipUnits[0].length;
  
  shipsData.getRange(2, 1, numShips, numShipsSize).setValues(shipUnits);
  
  if (sendMail != ''){
    if (sendMail[0] == "Character" && sendMail[1] != "Ship"){
      MailApp.sendEmail("psytor@gmail.com", "New Character(s) have been implemented", "There is new character(s) that have been implemented make sure everything is alright!");
      var currentCharVer = version.getRange(4,2).getValue();
      version.getRange(4,2).setValue(currentCharVer+1);
    }
    if (sendMail[0] == "Ship"){
      MailApp.sendEmail("psytor@gmail.com", "New Ship(s) have been implemented", "There is new ship(s) that have been implemented make sure everything is alright!");
      var currentShipVer = version.getRange(4,2).getValue();
      version.getRange(5,2).setValue(currentShipVer+1);
    }
    if (sendMail[1] == "Ship"){
        MailApp.sendEmail("psytor@gmail.com", "New Units have been implemented", "There is new character(s) and ship(s) have has been implemented make sure everything is alright!");
      var currentCharVer = version.getRange(4,2).getValue();
      version.getRange(4,2).setValue(currentCharVer+1);
      var currentShipVer = version.getRange(5,2).getValue();
      version.getRange(5,2).setValue(currentShipVer+1);      
    }
  }

}