// ****************************************
//Main Variables
// ****************************************

// Variables for Google Sheets good functioning
// ss is Mainly to shorten the command as you will always need the SpreadsheetApp everywhere

var ss = SpreadsheetApp.getActiveSpreadsheet();
var ssTz = SpreadsheetApp.getActive().getSpreadsheetTimeZone();

// ShortCuts for the different sheets needed

var verSheet = ss.getSheetByName("DataVersions");
var charsFarmLocSheet = ss.getSheetByName('CharsFarmLocation');
var shipsFarmLocSheet = ss.getSheetByName('ShipsFarmLocation');
var charsDataSheet = ss.getSheetByName('CharsData');
var shipsDataSheet = ss.getSheetByName('ShipsData');
var missionsSheet = ss.getSheetByName('Missions');
var journeyGuideSheet = ss.getSheetByName('JourneyGuide');

function versionCheck(){

// Checking the version of the different sheets containing data
// If any values are higher - Forces an update of the fields

  var verFetch = UrlFetchApp.fetch('http://farmroadmap_link:3000/swgoh-data/dataversion');
  var verJSON = JSON.parse(verFetch);

// Taking Current values in the FRM to compare with the Fetch above

  var CharsFarmSheetVer = verSheet.getRange(2,2).getValue();
  var ShipsFarmSheetVer = verSheet.getRange(3,2).getValue();
  var CharsDataSheetVer = verSheet.getRange(4,2).getValue();
  var ShipsDataSheetVer = verSheet.getRange(5,2).getValue();
  var MissionsDataSheetVer = verSheet.getRange(6,2).getValue();
  var JourneyGuideSheetVer = verSheet.getRange(7,2).getValue();
  var SheetVer = verSheet.getRange(7,2).getValue();
  var triggerUpdate = '';

// If Different - Launching Functino that will update the sheets.

  for(var dataVer = 0, dataCheck = verJSON.length; dataVer < dataCheck; dataVer++){
    if(verJSON[dataVer].data === 'CharsFarmLocation'){
      if(verJSON[dataVer].version != CharsFarmSheetVer){
        updateCharsFarmLoc();
        
        verSheet.getRange(2,2).setValue(verJSON[dataVer].version);
        verSheet.getRange(2,4).setValue(new Date());
      }  
    }
    if(verJSON[dataVer].data === 'ShipsFarmLocation'){
      if(verJSON[dataVer].version != ShipsFarmSheetVer){
        updateShipsFarmLoc();
        
        verSheet.getRange(3,2).setValue(verJSON[dataVer].version);
        verSheet.getRange(3,4).setValue(new Date());
      }  
    }
    if(verJSON[dataVer].data === 'CharsData'){
      if(verJSON[dataVer].version != CharsDataSheetVer){
        updateCharsData();
        
        verSheet.getRange(4,2).setValue(verJSON[dataVer].version);
        verSheet.getRange(4,4).setValue(new Date())
      }  
    }
    if(verJSON[dataVer].data === 'ShipsData'){
      if(verJSON[dataVer].version != ShipsDataSheetVer){
        updateShipsData();
        
        verSheet.getRange(5,2).setValue(verJSON[dataVer].version);
        verSheet.getRange(5,4).setValue(new Date());
      }  
    }
    if(verJSON[dataVer].data === 'Missions'){
      if(verJSON[dataVer].version != MissionsDataSheetVer){
        updateMissionsData();
        
        verSheet.getRange(6,2).setValue(verJSON[dataVer].version);
        verSheet.getRange(6,4).setValue(new Date());
      }  
    }
    if(verJSON[dataVer].data === 'JourneyGuide'){
      if(verJSON[dataVer].version != JourneyGuideSheetVer){
        updateJourneyData();
        
        verSheet.getRange(7,2).setValue(verJSON[dataVer].version);
        verSheet.getRange(7,4).setValue(new Date());
      }  
    }
    if(verJSON[dataVer].data === 'SheetVersion'){
      if(verJSON[dataVer].version != SheetVer){
        verSheet.getRange(7,2).setValue(verJSON[dataVer].version);
        verSheet.getRange(7,3).setValue(verJSON[dataVer].link);
        verSheet.getRange(7,4).setValue(new Date());
      }  
    }
  }
}

function updateCharsFarmLoc(){
  
  // ****************************************
  // Function Variables
  // ****************************************

  var charsFarmLocFetch = UrlFetchApp.fetch('http://farmroadmap.dynv6.net:3000/swgoh-data/charfarmlocation')
  var charsFarmLocJson = JSON.parse(charsFarmLocFetch);
  var charsFarmLocSheetData = charsFarmLocSheet.getDataRange().getValues();
  var charsFarmLocSheetLength = charsFarmLocSheetData.length;
  var charsFarmLocNewData = [];
  
  if(charsFarmLocSheetLength > 1){
    charsFarmLocSheet.deleteRows(1,charsFarmLocSheetLength-1);
    charsFarmLocSheet.getRange(1,1,1,5).clearContent();
  }
  
  var charFarmLocArray = ['Character','Location','Level','Event Name','Location Value'];
  
  charsFarmLocNewData.push(charFarmLocArray);
  
  
  for(var char = 0, charList = charsFarmLocJson.length; char < charList; char++){
    var charFarmLocArray = [
      charsFarmLocJson[char].character,
      charsFarmLocJson[char].location,
      charsFarmLocJson[char].level,
      charsFarmLocJson[char].eventname,
      charsFarmLocJson[char].locationvalue
    ]
    
    charsFarmLocNewData.push(charFarmLocArray);
  }

  var charsFarmLocNewLength = charsFarmLocNewData.length;
  
  charsFarmLocSheet.insertRows(1,charsFarmLocNewLength-1);
  charsFarmLocSheet.getRange(1, 1, charsFarmLocNewLength, 5).setValues(charsFarmLocNewData);

}

function updateShipsFarmLoc(){
  
  // ****************************************
  // Function Variables
  // ****************************************

  var shipsFarmLocFetch = UrlFetchApp.fetch('http://farmroadmap.dynv6.net:3000/swgoh-data/shipfarmlocation')
  var shipsFarmLocJson = JSON.parse(shipsFarmLocFetch);
  var shipsFarmLocSheetData = shipsFarmLocSheet.getDataRange().getValues();
  var shipsFarmLocSheetLength = shipsFarmLocSheetData.length;
  var shipsFarmLocNewData = [];
  
  

  if(shipsFarmLocSheetLength > 1){
    shipsFarmLocSheet.deleteRows(1,shipsFarmLocSheetLength-1);
    shipsFarmLocSheet.getRange(1,1,1,5).clearContent();
  }
  
  var shipFarmLocArray = ['Character','Location','Level','Event Name','Location Value'];
  
  shipsFarmLocNewData.push(shipFarmLocArray);
  
  
  for(var ship = 0, shipList = shipsFarmLocJson.length; ship < shipList; ship++){
    var shipFarmLocArray = [
      shipsFarmLocJson[ship].ship,
      shipsFarmLocJson[ship].location,
      shipsFarmLocJson[ship].level,
      shipsFarmLocJson[ship].eventname,
      shipsFarmLocJson[ship].locationvalue
    ]
    
    shipsFarmLocNewData.push(shipFarmLocArray);
  }

  var shipsFarmLocNewLength = shipsFarmLocNewData.length;
  
  shipsFarmLocSheet.insertRows(1,shipsFarmLocNewLength-1);
  shipsFarmLocSheet.getRange(1, 1, shipsFarmLocNewLength, 5).setValues(shipsFarmLocNewData);

}

function updateCharsData(){
  
  // ****************************************
  // Function Variables
  // ****************************************

  var charsDataFetch = UrlFetchApp.fetch('http://farmroadmap.dynv6.net:3000/swgoh-data/chardata')
  var charsDataJson = JSON.parse(charsDataFetch);
  var charsDataSheetData = charsDataSheet.getDataRange().getValues();
  var charsDataSheetLength = charsDataSheetData.length;
  var charsDataNewData = [];
  
  if(charsDataSheetLength > 1){
    charsDataSheet.deleteRows(1,charsDataSheetLength-1);
    charsDataSheet.getRange(1,1,1,6).clearContent();
  }
  
  var charDataArray = ['Name','Role','Alignment','Affiliations','Unlock Shards','Base ID'];
  
  charsDataNewData.push(charDataArray);
  
  
  for(var char = 0, charList = charsDataJson.length; char < charList; char++){
    var charDataArray = [
      charsDataJson[char].name,
      charsDataJson[char].role,
      charsDataJson[char].alignment,
      charsDataJson[char].affiliations,
      charsDataJson[char].shardstounlock,
      charsDataJson[char].base_id
    ]
    
    charsDataNewData.push(charDataArray);
  }

  var charsDataNewDataLength = charsDataNewData.length;
  
  charsDataSheet.insertRows(1,charsDataNewDataLength-1);
  charsDataSheet.getRange(1, 1, charsDataNewDataLength, 6).setValues(charsDataNewData);

}

// Each functions are pretty much working the same way - Pull the new data organise it to fit within the sheet.

function updateShipsData(){
  
  // ****************************************
  // Function Variables
  // ****************************************

  var shipsDataFetch = UrlFetchApp.fetch('http://farmroadmap.dynv6.net:3000/swgoh-data/shipdata')
  var shipsDataJson = JSON.parse(shipsDataFetch);
  var shipsDataSheetData = shipsDataSheet.getDataRange().getValues();
  var shipsDataSheetLength = shipsDataSheetData.length;
  var shipsDataNewData = [];
  
  if(shipsDataSheetLength > 1){
    shipsDataSheet.deleteRows(1,shipsDataSheetLength-1);
    shipsDataSheet.getRange(1,1,1,6).clearContent();
  }
  
  var shipDataArray = ['Name','Role','Alignment','Affiliations','Unlock Shards','Base ID'];
  
  shipsDataNewData.push(shipDataArray);
  
  
  for(var ship = 0, shipList = shipsDataJson.length; ship < shipList; ship++){
    var shipDataArray = [
      shipsDataJson[ship].name,
      shipsDataJson[ship].role,
      shipsDataJson[ship].alignment,
      shipsDataJson[ship].affiliations,
      shipsDataJson[ship].shardstounlock,
      shipsDataJson[ship].base_id
    ]
    
    shipsDataNewData.push(shipDataArray);
  }

  var shipsDataNewDataLength = shipsDataNewData.length;
  
  shipsDataSheet.insertRows(1,shipsDataNewDataLength-1);
  shipsDataSheet.getRange(1, 1, shipsDataNewDataLength, 6).setValues(shipsDataNewData);

}

function updateMissionsData(){
  
  var missionsDataFetch = UrlFetchApp.fetch('http://farmroadmap.dynv6.net:3000/swgoh-data/missions');
  var missionsDataJSON = JSON.parse(missionsDataFetch);
  var missionsSheetData = missionsSheet.getDataRange().getValues();
  var missionsSheetLength = missionsSheetData.length;
  var missionsDataNewData = [];
  
  if (missionsSheetLength > 1){
    missionsSheet.deleteRows(1, missionsSheetLength-1);
    missionsSheet.getRange(1,32).clearContent();
  }
  
  for ( var missions=0, missionsList = missionsDataJSON.length; missions < missionsList; missions++){
        
    var missionsArray = [
      missionsDataJSON[missions].missions,
      missionsDataJSON[missions].main1,
      missionsDataJSON[missions].gm1,
      missionsDataJSON[missions].rm1,
      missionsDataJSON[missions].main2,
      missionsDataJSON[missions].gm2,
      missionsDataJSON[missions].rm2,
      missionsDataJSON[missions].main3,
      missionsDataJSON[missions].gm3,
      missionsDataJSON[missions].rm3,
      missionsDataJSON[missions].main4,
      missionsDataJSON[missions].gm4,
      missionsDataJSON[missions].rm4,
      missionsDataJSON[missions].main5,
      missionsDataJSON[missions].gm5,
      missionsDataJSON[missions].rm5,
      missionsDataJSON[missions].main6,
      missionsDataJSON[missions].gm6,
      missionsDataJSON[missions].rm6,
      missionsDataJSON[missions].side1,
      missionsDataJSON[missions].gs1,
      missionsDataJSON[missions].rs1,
      missionsDataJSON[missions].side2,
      missionsDataJSON[missions].gs2,
      missionsDataJSON[missions].rs2,
      missionsDataJSON[missions].side3,
      missionsDataJSON[missions].gs3,
      missionsDataJSON[missions].rs3,
      missionsDataJSON[missions].side4,
      missionsDataJSON[missions].gs4,
      missionsDataJSON[missions].rs4,
      missionsDataJSON[missions].side5,
      missionsDataJSON[missions].gs5,
      missionsDataJSON[missions].rs5,
      missionsDataJSON[missions].side6,
      missionsDataJSON[missions].gs6,
      missionsDataJSON[missions].rs6,
      missionsDataJSON[missions].side7,
      missionsDataJSON[missions].gs7,
      missionsDataJSON[missions].rs7,
      missionsDataJSON[missions].side8,
      missionsDataJSON[missions].gs8,
      missionsDataJSON[missions].rs8,
      missionsDataJSON[missions].side9,
      missionsDataJSON[missions].gs9,
      missionsDataJSON[missions].rs9,
      missionsDataJSON[missions].side10,
      missionsDataJSON[missions].gs10,
      missionsDataJSON[missions].rs10,
      missionsDataJSON[missions].legend1,
      missionsDataJSON[missions].gl1,
      missionsDataJSON[missions].rl1,
      missionsDataJSON[missions].legend2,
      missionsDataJSON[missions].gl2,
      missionsDataJSON[missions].rl2,
      missionsDataJSON[missions].legend3,
      missionsDataJSON[missions].gl3,
      missionsDataJSON[missions].rl3,
      missionsDataJSON[missions].legend4,
      missionsDataJSON[missions].gl4,
      missionsDataJSON[missions].rl4,
      missionsDataJSON[missions].ship1,
      missionsDataJSON[missions].ship2,
      missionsDataJSON[missions].ship3,
      missionsDataJSON[missions].ship4,
      missionsDataJSON[missions].ship5,
      missionsDataJSON[missions].ship6,
      missionsDataJSON[missions].ship7,
      missionsDataJSON[missions].ship8,
      missionsDataJSON[missions].ship9,
      missionsDataJSON[missions].ship10,
      missionsDataJSON[missions].notes
    ]
    
    missionsDataNewData.push(missionsArray)
  }

  var missionsArrayDataLength = missionsDataNewData.length;
  
  missionsSheet.insertRows(1,missionsArrayDataLength-1);
  missionsSheet.getRange(1, 1, missionsArrayDataLength, 72).setValues(missionsDataNewData);

}

function updateJourneyData(){
  
  var journeyDataFetch = UrlFetchApp.fetch('http://farmroadmap.dynv6.net:3000/swgoh-data/journeyguide');
  var journeyDataJSON = JSON.parse(journeyDataFetch);
  var journeyGuideSheetData = journeyGuideSheet.getDataRange().getValues();
  var journeyGuideSheetLength = journeyGuideSheetData.length;
  var journeyDataNewData = [];
  
  if (journeyGuideSheetLength > 1){
    journeyGuideSheet.deleteRows(1, journeyGuideSheetLength-1);
    journeyGuideSheet.getRange(1,32).clearContent();
  }
  
  for ( var journey=0, journeyList = journeyDataJSON.length; journey < journeyList; journey++){
        
    var jgArray = [
      journeyDataJSON[journey].legcharacter,
      journeyDataJSON[journey].main1,
      journeyDataJSON[journey].gm1,
      journeyDataJSON[journey].rm1,
      journeyDataJSON[journey].main2,
      journeyDataJSON[journey].gm2,
      journeyDataJSON[journey].rm2,
      journeyDataJSON[journey].main3,
      journeyDataJSON[journey].gm3,
      journeyDataJSON[journey].rm3,
      journeyDataJSON[journey].main4,
      journeyDataJSON[journey].gm4,
      journeyDataJSON[journey].rm4,
      journeyDataJSON[journey].main5,
      journeyDataJSON[journey].gm5,
      journeyDataJSON[journey].rm5,
      journeyDataJSON[journey].main6,
      journeyDataJSON[journey].gm6,
      journeyDataJSON[journey].rm6,
      journeyDataJSON[journey].side1,
      journeyDataJSON[journey].gs1,
      journeyDataJSON[journey].rs1,
      journeyDataJSON[journey].side2,
      journeyDataJSON[journey].gs2,
      journeyDataJSON[journey].rs2,
      journeyDataJSON[journey].side3,
      journeyDataJSON[journey].gs3,
      journeyDataJSON[journey].rs3,
      journeyDataJSON[journey].side4,
      journeyDataJSON[journey].gs4,
      journeyDataJSON[journey].rs4,
      journeyDataJSON[journey].side5,
      journeyDataJSON[journey].gs5,
      journeyDataJSON[journey].rs5,
      journeyDataJSON[journey].side6,
      journeyDataJSON[journey].gs6,
      journeyDataJSON[journey].rs6,
      journeyDataJSON[journey].side7,
      journeyDataJSON[journey].gs7,
      journeyDataJSON[journey].rs7,
      journeyDataJSON[journey].side8,
      journeyDataJSON[journey].gs8,
      journeyDataJSON[journey].rs8,
      journeyDataJSON[journey].side9,
      journeyDataJSON[journey].gs9,
      journeyDataJSON[journey].rs9,
      journeyDataJSON[journey].side10,
      journeyDataJSON[journey].gs10,
      journeyDataJSON[journey].rs10,
      journeyDataJSON[journey].legend1,
      journeyDataJSON[journey].gl1,
      journeyDataJSON[journey].rl1,
      journeyDataJSON[journey].legend2,
      journeyDataJSON[journey].gl2,
      journeyDataJSON[journey].rl2,
      journeyDataJSON[journey].legend3,
      journeyDataJSON[journey].gl3,
      journeyDataJSON[journey].rl3,
      journeyDataJSON[journey].legend4,
      journeyDataJSON[journey].gl4,
      journeyDataJSON[journey].rl4,
      journeyDataJSON[journey].ship1,
      journeyDataJSON[journey].ship2,
      journeyDataJSON[journey].ship3,
      journeyDataJSON[journey].ship4,
      journeyDataJSON[journey].ship5,
      journeyDataJSON[journey].ship6,
      journeyDataJSON[journey].ship7,
      journeyDataJSON[journey].ship8,
      journeyDataJSON[journey].ship9,
      journeyDataJSON[journey].ship10,
      journeyDataJSON[journey].notes
    ]
    
    journeyDataNewData.push(jgArray)
  }

  var jgArrayDataLength = journeyDataNewData.length;
  
  journeyGuideSheet.insertRows(1,jgArrayDataLength-1);
  journeyGuideSheet.getRange(1, 1, jgArrayDataLength, 72).setValues(journeyDataNewData);

}
