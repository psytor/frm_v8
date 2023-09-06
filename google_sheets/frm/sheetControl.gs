// ****************************************
// Sheet Control Variables
// ****************************************

var ss = SpreadsheetApp.getActiveSpreadsheet();
var farmLocation = ss.getSheetByName('FarmLocation');

// ****************************************
// Menu Creation on Open
// ****************************************

function onOpen(e) {
  var ui = SpreadsheetApp.getUi();
  ui
  .createMenu('Manage')
  .addItem('Get Roster', 'allyCodeCheck')
  .addSeparator()
  .addSubMenu(ui
              .createMenu('Auto-Refresh')
              .addItem('Set Auto-Refresh', 'setAutoRefresh')
              .addItem('Stop Auto-Refresh', 'stopAutoRefresh'))
  .addToUi();
  
  ui
  .createMenu('Sheet Control')
  .addItem('Rebuild Journey', 'rebuildJG')
  .addItem('Rebuild Mission 1', 'rebuildMissionOne')
  .addItem('Rebuild Mission 2', 'rebuildMissionTwo')
  .addItem('Rebuild Mission 3', 'rebuildMissionThree')
  .addItem('Rebuild Mission 4', 'rebuildMissionFour')
  .addItem('Rebuild Mission 5', 'rebuildMissionFive')
  .addItem('Rebuild Mission 6', 'rebuildMissionSix')
  .addToUi();
  
}

function autoRefresh() {
  var allyCode = profile.getRange(3,2).getDisplayValue();
  autoRequest(allyCode);
}

function setAutoRefresh(){
  
  var ui = SpreadsheetApp.getUi();
  var updateHour = Math.floor(Math.random() * 12);
  var updateMinute = Math.floor(Math.random() * 60);
  
  ui.alert("If you had a previous version, don't forget to Disable the Auto-Refresh from this old version before deleting the file.");
  
  var allyCode = profile.getRange(3,2).getDisplayValue();
  
  if (allyCode == "" || allyCode == "Fill your Ally Code here"){
    var allyCodeMissing = ui.prompt('Ally Code Missing!', 'Please fill in your Ally Code:', ui.ButtonSet.OK_CANCEL);
    
    if (allyCodeMissing.getSelectedButton() == ui.Button.CANCEL){return;}
    
    if (allyCodeMissing.getSelectedButton() == ui.Button.OK){
      
      if (allyCodeMissing.getResponseText() == "") {ui.alert('No Ally Code Specified!', 'Please specify your Ally Code!', ui.ButtonSet.OK); return;}
      
      else {
        if (allyCodeMissing.getResponseText().length == 9 && !isNaN(allyCodeMissing.getResponseText())) {
          profile.getRange(3,2).setValue(allyCodeMissing.getResponseText());
          allyCode = allyCodeMissing.getResponseText();
          profile.getRange("D2").setValue("AUTO-REFRESH SET").setFontColor("green");
          
          ScriptApp.newTrigger("autoRefresh")
          .timeBased()
          .atHour(updateHour)
          .nearMinute(updateMinute)
          .everyDays(1)
          .create();
          ScriptApp.newTrigger("autoRefresh")
          .timeBased()
          .atHour(updateHour+12)
          .nearMinute(updateMinute)
          .everyDays(1)
          .create();
        }
        else { ui.alert("Invalid Entry! Please make sure you entered 9 numbers for your Ally Code!");}
      }
    }
  } 
  else 
  {if (allyCode.length == 9 && !isNaN(allyCode)) {
    profile.getRange("D2").setValue("AUTO-REFRESH SET").setFontColor("green");
    
    ScriptApp.newTrigger("autoRefresh")
    .timeBased()
    .atHour(updateHour)
    .nearMinute(updateMinute)
    .everyDays(1)
    .create();
    ScriptApp.newTrigger("autoRefresh")
    .timeBased()
    .atHour(updateHour+12)
    .nearMinute(updateMinute)
    .everyDays(1)
    .create();
  }
  else {ui.alert("Invalid Entry! Please make sure you entered 9 numbers for your Ally Code!");}
  }
  
}

function stopAutoRefresh(){
  
  var Triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < Triggers.length; i++) {
    ScriptApp.deleteTrigger(Triggers[i]);
  }
  profile.getRange("D2").setValue("NOT SET").setFontColor("red");
}
