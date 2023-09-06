var jgSheet = ss.getSheetByName('Journey Check');
var mission1Sheet = ss.getSheetByName('Mission 1');
var mission2Sheet = ss.getSheetByName('Mission 2');
var mission3Sheet = ss.getSheetByName('Mission 3');
var mission4Sheet = ss.getSheetByName('Mission 4');
var mission5Sheet = ss.getSheetByName('Mission 5');
var mission6Sheet = ss.getSheetByName('Mission 6');


function rebuildJG(){
  
  var ui = SpreadsheetApp.getUi();

  jgSheet.getRange('A8:A37').activate();
  jgSheet.getRange('A8:A37').clearDataValidations();

  jgSheet.getRange(8,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,2,FALSE)),"")');
  jgSheet.getRange(9,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,5,FALSE)),"")');
  jgSheet.getRange(10,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,8,FALSE)),"")');
  jgSheet.getRange(11,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,11,FALSE)),"")');
  jgSheet.getRange(12,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,14,FALSE)),"")');
  jgSheet.getRange(13,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,17,FALSE)),"")');

  jgSheet.getRange(14,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,20,FALSE)),"")');
  jgSheet.getRange(15,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,23,FALSE)),"")');
  jgSheet.getRange(16,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,26,FALSE)),"")');
  jgSheet.getRange(17,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,29,FALSE)),"")');
  jgSheet.getRange(18,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,32,FALSE)),"")');
  jgSheet.getRange(19,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,35,FALSE)),"")');
  jgSheet.getRange(20,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,38,FALSE)),"")');
  jgSheet.getRange(21,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,41,FALSE)),"")');
  jgSheet.getRange(22,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,44,FALSE)),"")');
  jgSheet.getRange(23,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,47,FALSE)),"")');
  
  jgSheet.getRange(24,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,50,FALSE)),"")');
  jgSheet.getRange(25,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,53,FALSE)),"")');
  jgSheet.getRange(26,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,56,FALSE)),"")');
  jgSheet.getRange(27,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,59,FALSE)),"")');
  
  jgSheet.getRange(28,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,62,FALSE)),"")');
  jgSheet.getRange(29,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,63,FALSE)),"")');
  jgSheet.getRange(30,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,64,FALSE)),"")');
  jgSheet.getRange(31,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,65,FALSE)),"")');
  jgSheet.getRange(32,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,66,FALSE)),"")');
  jgSheet.getRange(33,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,67,FALSE)),"")');
  jgSheet.getRange(34,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,68,FALSE)),"")');
  jgSheet.getRange(35,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,69,FALSE)),"")');
  jgSheet.getRange(36,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,70,FALSE)),"")');
  jgSheet.getRange(37,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,71,FALSE)),"")');

  jgSheet.getRange(8,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,3,FALSE)),"")');
  jgSheet.getRange(9,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,6,FALSE)),"")');
  jgSheet.getRange(10,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,9,FALSE)),"")');
  jgSheet.getRange(11,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,12,FALSE)),"")');
  jgSheet.getRange(12,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,15,FALSE)),"")');
  jgSheet.getRange(13,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,18,FALSE)),"")');

  jgSheet.getRange(14,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,21,FALSE)),"")');
  jgSheet.getRange(15,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,24,FALSE)),"")');
  jgSheet.getRange(16,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,27,FALSE)),"")');
  jgSheet.getRange(17,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,30,FALSE)),"")');
  jgSheet.getRange(18,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,33,FALSE)),"")');
  jgSheet.getRange(19,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,36,FALSE)),"")');
  jgSheet.getRange(20,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,39,FALSE)),"")');
  jgSheet.getRange(21,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,42,FALSE)),"")');
  jgSheet.getRange(22,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,45,FALSE)),"")');
  jgSheet.getRange(23,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,48,FALSE)),"")');
  
  jgSheet.getRange(24,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,51,FALSE)),"")');
  jgSheet.getRange(25,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,54,FALSE)),"")');
  jgSheet.getRange(26,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,57,FALSE)),"")');
  jgSheet.getRange(27,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,60,FALSE)),"")');

  jgSheet.getRange(8,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,4,FALSE)),"")');
  jgSheet.getRange(9,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,7,FALSE)),"")');
  jgSheet.getRange(10,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,10,FALSE)),"")');
  jgSheet.getRange(11,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,13,FALSE)),"")');
  jgSheet.getRange(12,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,16,FALSE)),"")');
  jgSheet.getRange(13,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,19,FALSE)),"")');
  
  jgSheet.getRange(14,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,22,FALSE)),"")');
  jgSheet.getRange(15,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,25,FALSE)),"")');
  jgSheet.getRange(16,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,28,FALSE)),"")');
  jgSheet.getRange(17,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,31,FALSE)),"")');
  jgSheet.getRange(18,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,34,FALSE)),"")');
  jgSheet.getRange(19,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,37,FALSE)),"")');
  jgSheet.getRange(20,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,40,FALSE)),"")');
  jgSheet.getRange(21,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,43,FALSE)),"")');
  jgSheet.getRange(22,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,46,FALSE)),"")');
  jgSheet.getRange(23,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,49,FALSE)),"")');
  
  jgSheet.getRange(24,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,52,FALSE)),"")');
  jgSheet.getRange(25,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,55,FALSE)),"")');
  jgSheet.getRange(26,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,58,FALSE)),"")');
  jgSheet.getRange(27,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,jgUpd,61,FALSE)),"")');

  jgSheet.getRange('\'Journey Check\'!A8:A27').setDataValidation(SpreadsheetApp.newDataValidation()
  .setAllowInvalid(false)
  .requireValueInRange(jgSheet.getRange('CharsData!$A:$A'), true)
  .build());
  jgSheet.getRange('\'Journey Check\'!A28:A37').setDataValidation(SpreadsheetApp.newDataValidation()
  .setAllowInvalid(false)
  .requireValueInRange(jgSheet.getRange('ShipsData!$A:$A'), true)
  .build());
}

function rebuildMissionOne(){
  
  var ui = SpreadsheetApp.getUi();

  mission1Sheet.getRange('A8:A37').activate();
  mission1Sheet.getRange('A8:A37').clearDataValidations();

  mission1Sheet.getRange(8,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,2,FALSE)),"")');
  mission1Sheet.getRange(9,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,5,FALSE)),"")');
  mission1Sheet.getRange(10,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,8,FALSE)),"")');
  mission1Sheet.getRange(11,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,11,FALSE)),"")');
  mission1Sheet.getRange(12,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,14,FALSE)),"")');
  mission1Sheet.getRange(13,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,17,FALSE)),"")');

  mission1Sheet.getRange(14,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,20,FALSE)),"")');
  mission1Sheet.getRange(15,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,23,FALSE)),"")');
  mission1Sheet.getRange(16,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,26,FALSE)),"")');
  mission1Sheet.getRange(17,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,29,FALSE)),"")');
  mission1Sheet.getRange(18,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,32,FALSE)),"")');
  mission1Sheet.getRange(19,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,35,FALSE)),"")');
  mission1Sheet.getRange(20,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,38,FALSE)),"")');
  mission1Sheet.getRange(21,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,41,FALSE)),"")');
  mission1Sheet.getRange(22,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,44,FALSE)),"")');
  mission1Sheet.getRange(23,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,47,FALSE)),"")');
  
  mission1Sheet.getRange(24,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,50,FALSE)),"")');
  mission1Sheet.getRange(25,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,53,FALSE)),"")');
  mission1Sheet.getRange(26,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,56,FALSE)),"")');
  mission1Sheet.getRange(27,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,59,FALSE)),"")');
  
  mission1Sheet.getRange(28,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,62,FALSE)),"")');
  mission1Sheet.getRange(29,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,63,FALSE)),"")');
  mission1Sheet.getRange(30,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,64,FALSE)),"")');
  mission1Sheet.getRange(31,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,65,FALSE)),"")');
  mission1Sheet.getRange(32,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,66,FALSE)),"")');
  mission1Sheet.getRange(33,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,67,FALSE)),"")');
  mission1Sheet.getRange(34,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,68,FALSE)),"")');
  mission1Sheet.getRange(35,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,69,FALSE)),"")');
  mission1Sheet.getRange(36,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,70,FALSE)),"")');
  mission1Sheet.getRange(37,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,71,FALSE)),"")');

  mission1Sheet.getRange(8,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,3,FALSE)),"")');
  mission1Sheet.getRange(9,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,6,FALSE)),"")');
  mission1Sheet.getRange(10,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,9,FALSE)),"")');
  mission1Sheet.getRange(11,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,12,FALSE)),"")');
  mission1Sheet.getRange(12,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,15,FALSE)),"")');
  mission1Sheet.getRange(13,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,18,FALSE)),"")');

  mission1Sheet.getRange(14,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,21,FALSE)),"")');
  mission1Sheet.getRange(15,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,24,FALSE)),"")');
  mission1Sheet.getRange(16,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,27,FALSE)),"")');
  mission1Sheet.getRange(17,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,30,FALSE)),"")');
  mission1Sheet.getRange(18,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,33,FALSE)),"")');
  mission1Sheet.getRange(19,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,36,FALSE)),"")');
  mission1Sheet.getRange(20,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,39,FALSE)),"")');
  mission1Sheet.getRange(21,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,42,FALSE)),"")');
  mission1Sheet.getRange(22,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,45,FALSE)),"")');
  mission1Sheet.getRange(23,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,48,FALSE)),"")');
  
  mission1Sheet.getRange(24,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,51,FALSE)),"")');
  mission1Sheet.getRange(25,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,54,FALSE)),"")');
  mission1Sheet.getRange(26,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,57,FALSE)),"")');
  mission1Sheet.getRange(27,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,60,FALSE)),"")');

  mission1Sheet.getRange(8,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,4,FALSE)),"")');
  mission1Sheet.getRange(9,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,7,FALSE)),"")');
  mission1Sheet.getRange(10,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,10,FALSE)),"")');
  mission1Sheet.getRange(11,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,13,FALSE)),"")');
  mission1Sheet.getRange(12,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,16,FALSE)),"")');
  mission1Sheet.getRange(13,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,19,FALSE)),"")');
  
  mission1Sheet.getRange(14,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,22,FALSE)),"")');
  mission1Sheet.getRange(15,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,25,FALSE)),"")');
  mission1Sheet.getRange(16,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,28,FALSE)),"")');
  mission1Sheet.getRange(17,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,31,FALSE)),"")');
  mission1Sheet.getRange(18,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,34,FALSE)),"")');
  mission1Sheet.getRange(19,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,37,FALSE)),"")');
  mission1Sheet.getRange(20,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,40,FALSE)),"")');
  mission1Sheet.getRange(21,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,43,FALSE)),"")');
  mission1Sheet.getRange(22,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,46,FALSE)),"")');
  mission1Sheet.getRange(23,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,49,FALSE)),"")');
  
  mission1Sheet.getRange(24,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,52,FALSE)),"")');
  mission1Sheet.getRange(25,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,55,FALSE)),"")');
  mission1Sheet.getRange(26,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,58,FALSE)),"")');
  mission1Sheet.getRange(27,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,61,FALSE)),"")');
  
  mission1Sheet.getRange('\'Mission 1\'!A8:A27').setDataValidation(SpreadsheetApp.newDataValidation()
  .setAllowInvalid(false)
  .requireValueInRange(mission1Sheet.getRange('CharsData!$A:$A'), true)
  .build());
  mission1Sheet.getRange('\'Mission 1\'!A28:A37').setDataValidation(SpreadsheetApp.newDataValidation()
  .setAllowInvalid(false)
  .requireValueInRange(mission1Sheet.getRange('ShipsData!$A:$A'), true)
  .build());

}

function rebuildMissionTwo(){
  
  var ui = SpreadsheetApp.getUi();

  mission2Sheet.getRange('A8:A37').activate();
  mission2Sheet.getRange('A8:A37').clearDataValidations();

  mission2Sheet.getRange(8,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,2,FALSE)),"")');
  mission2Sheet.getRange(9,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,5,FALSE)),"")');
  mission2Sheet.getRange(10,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,8,FALSE)),"")');
  mission2Sheet.getRange(11,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,11,FALSE)),"")');
  mission2Sheet.getRange(12,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,14,FALSE)),"")');
  mission2Sheet.getRange(13,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,17,FALSE)),"")');

  mission2Sheet.getRange(14,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,20,FALSE)),"")');
  mission2Sheet.getRange(15,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,23,FALSE)),"")');
  mission2Sheet.getRange(16,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,26,FALSE)),"")');
  mission2Sheet.getRange(17,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,29,FALSE)),"")');
  mission2Sheet.getRange(18,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,32,FALSE)),"")');
  mission2Sheet.getRange(19,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,35,FALSE)),"")');
  mission2Sheet.getRange(20,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,38,FALSE)),"")');
  mission2Sheet.getRange(21,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,41,FALSE)),"")');
  mission2Sheet.getRange(22,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,44,FALSE)),"")');
  mission2Sheet.getRange(23,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,47,FALSE)),"")');
  
  mission2Sheet.getRange(24,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,50,FALSE)),"")');
  mission2Sheet.getRange(25,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,53,FALSE)),"")');
  mission2Sheet.getRange(26,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,56,FALSE)),"")');
  mission2Sheet.getRange(27,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,59,FALSE)),"")');
  
  mission2Sheet.getRange(28,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,62,FALSE)),"")');
  mission2Sheet.getRange(29,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,63,FALSE)),"")');
  mission2Sheet.getRange(30,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,64,FALSE)),"")');
  mission2Sheet.getRange(31,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,65,FALSE)),"")');
  mission2Sheet.getRange(32,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,66,FALSE)),"")');
  mission2Sheet.getRange(33,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,67,FALSE)),"")');
  mission2Sheet.getRange(34,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,68,FALSE)),"")');
  mission2Sheet.getRange(35,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,69,FALSE)),"")');
  mission2Sheet.getRange(36,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,70,FALSE)),"")');
  mission2Sheet.getRange(37,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,71,FALSE)),"")');

  mission2Sheet.getRange(8,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,3,FALSE)),"")');
  mission2Sheet.getRange(9,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,6,FALSE)),"")');
  mission2Sheet.getRange(10,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,9,FALSE)),"")');
  mission2Sheet.getRange(11,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,12,FALSE)),"")');
  mission2Sheet.getRange(12,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,15,FALSE)),"")');
  mission2Sheet.getRange(13,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,18,FALSE)),"")');

  mission2Sheet.getRange(14,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,21,FALSE)),"")');
  mission2Sheet.getRange(15,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,24,FALSE)),"")');
  mission2Sheet.getRange(16,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,27,FALSE)),"")');
  mission2Sheet.getRange(17,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,30,FALSE)),"")');
  mission2Sheet.getRange(18,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,33,FALSE)),"")');
  mission2Sheet.getRange(19,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,36,FALSE)),"")');
  mission2Sheet.getRange(20,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,39,FALSE)),"")');
  mission2Sheet.getRange(21,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,42,FALSE)),"")');
  mission2Sheet.getRange(22,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,45,FALSE)),"")');
  mission2Sheet.getRange(23,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,48,FALSE)),"")');
  
  mission2Sheet.getRange(24,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,51,FALSE)),"")');
  mission2Sheet.getRange(25,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,54,FALSE)),"")');
  mission2Sheet.getRange(26,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,57,FALSE)),"")');
  mission2Sheet.getRange(27,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,60,FALSE)),"")');

  mission2Sheet.getRange(8,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,4,FALSE)),"")');
  mission2Sheet.getRange(9,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,7,FALSE)),"")');
  mission2Sheet.getRange(10,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,10,FALSE)),"")');
  mission2Sheet.getRange(11,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,13,FALSE)),"")');
  mission2Sheet.getRange(12,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,16,FALSE)),"")');
  mission2Sheet.getRange(13,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,19,FALSE)),"")');
  
  mission2Sheet.getRange(14,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,22,FALSE)),"")');
  mission2Sheet.getRange(15,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,25,FALSE)),"")');
  mission2Sheet.getRange(16,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,28,FALSE)),"")');
  mission2Sheet.getRange(17,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,31,FALSE)),"")');
  mission2Sheet.getRange(18,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,34,FALSE)),"")');
  mission2Sheet.getRange(19,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,37,FALSE)),"")');
  mission2Sheet.getRange(20,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,40,FALSE)),"")');
  mission2Sheet.getRange(21,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,43,FALSE)),"")');
  mission2Sheet.getRange(22,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,46,FALSE)),"")');
  mission2Sheet.getRange(23,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,49,FALSE)),"")');
  
  mission2Sheet.getRange(24,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,52,FALSE)),"")');
  mission2Sheet.getRange(25,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,55,FALSE)),"")');
  mission2Sheet.getRange(26,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,58,FALSE)),"")');
  mission2Sheet.getRange(27,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,61,FALSE)),"")');

  mission2Sheet.getRange('\'Mission 2\'!A8:A27').setDataValidation(SpreadsheetApp.newDataValidation()
  .setAllowInvalid(false)
  .requireValueInRange(mission2Sheet.getRange('CharsData!$A:$A'), true)
  .build());
  mission2Sheet.getRange('\'Mission 2\'!A28:A37').setDataValidation(SpreadsheetApp.newDataValidation()
  .setAllowInvalid(false)
  .requireValueInRange(mission2Sheet.getRange('ShipsData!$A:$A'), true)
  .build());
  
}

function rebuildMissionThree(){
  
  var ui = SpreadsheetApp.getUi();

  mission3Sheet.getRange('A8:A37').activate();
  mission3Sheet.getRange('A8:A37').clearDataValidations();

  mission3Sheet.getRange(8,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,2,FALSE)),"")');
  mission3Sheet.getRange(9,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,5,FALSE)),"")');
  mission3Sheet.getRange(10,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,8,FALSE)),"")');
  mission3Sheet.getRange(11,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,11,FALSE)),"")');
  mission3Sheet.getRange(12,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,14,FALSE)),"")');
  mission3Sheet.getRange(13,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,17,FALSE)),"")');

  mission3Sheet.getRange(14,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,20,FALSE)),"")');
  mission3Sheet.getRange(15,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,23,FALSE)),"")');
  mission3Sheet.getRange(16,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,26,FALSE)),"")');
  mission3Sheet.getRange(17,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,29,FALSE)),"")');
  mission3Sheet.getRange(18,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,32,FALSE)),"")');
  mission3Sheet.getRange(19,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,35,FALSE)),"")');
  mission3Sheet.getRange(20,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,38,FALSE)),"")');
  mission3Sheet.getRange(21,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,41,FALSE)),"")');
  mission3Sheet.getRange(22,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,44,FALSE)),"")');
  mission3Sheet.getRange(23,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,47,FALSE)),"")');
  
  mission3Sheet.getRange(24,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,50,FALSE)),"")');
  mission3Sheet.getRange(25,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,53,FALSE)),"")');
  mission3Sheet.getRange(26,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,56,FALSE)),"")');
  mission3Sheet.getRange(27,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,59,FALSE)),"")');
  
  mission3Sheet.getRange(28,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,62,FALSE)),"")');
  mission3Sheet.getRange(29,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,63,FALSE)),"")');
  mission3Sheet.getRange(30,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,64,FALSE)),"")');
  mission3Sheet.getRange(31,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,65,FALSE)),"")');
  mission3Sheet.getRange(32,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,66,FALSE)),"")');
  mission3Sheet.getRange(33,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,67,FALSE)),"")');
  mission3Sheet.getRange(34,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,68,FALSE)),"")');
  mission3Sheet.getRange(35,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,69,FALSE)),"")');
  mission3Sheet.getRange(36,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,70,FALSE)),"")');
  mission3Sheet.getRange(37,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,71,FALSE)),"")');

  mission3Sheet.getRange(8,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,3,FALSE)),"")');
  mission3Sheet.getRange(9,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,6,FALSE)),"")');
  mission3Sheet.getRange(10,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,9,FALSE)),"")');
  mission3Sheet.getRange(11,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,12,FALSE)),"")');
  mission3Sheet.getRange(12,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,15,FALSE)),"")');
  mission3Sheet.getRange(13,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,18,FALSE)),"")');

  mission3Sheet.getRange(14,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,21,FALSE)),"")');
  mission3Sheet.getRange(15,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,24,FALSE)),"")');
  mission3Sheet.getRange(16,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,27,FALSE)),"")');
  mission3Sheet.getRange(17,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,30,FALSE)),"")');
  mission3Sheet.getRange(18,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,33,FALSE)),"")');
  mission3Sheet.getRange(19,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,36,FALSE)),"")');
  mission3Sheet.getRange(20,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,39,FALSE)),"")');
  mission3Sheet.getRange(21,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,42,FALSE)),"")');
  mission3Sheet.getRange(22,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,45,FALSE)),"")');
  mission3Sheet.getRange(23,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,48,FALSE)),"")');
  
  mission3Sheet.getRange(24,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,51,FALSE)),"")');
  mission3Sheet.getRange(25,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,54,FALSE)),"")');
  mission3Sheet.getRange(26,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,57,FALSE)),"")');
  mission3Sheet.getRange(27,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,60,FALSE)),"")');

  mission3Sheet.getRange(8,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,4,FALSE)),"")');
  mission3Sheet.getRange(9,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,7,FALSE)),"")');
  mission3Sheet.getRange(10,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,10,FALSE)),"")');
  mission3Sheet.getRange(11,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,13,FALSE)),"")');
  mission3Sheet.getRange(12,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,16,FALSE)),"")');
  mission3Sheet.getRange(13,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,19,FALSE)),"")');
  
  mission3Sheet.getRange(14,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,22,FALSE)),"")');
  mission3Sheet.getRange(15,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,25,FALSE)),"")');
  mission3Sheet.getRange(16,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,28,FALSE)),"")');
  mission3Sheet.getRange(17,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,31,FALSE)),"")');
  mission3Sheet.getRange(18,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,34,FALSE)),"")');
  mission3Sheet.getRange(19,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,37,FALSE)),"")');
  mission3Sheet.getRange(20,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,40,FALSE)),"")');
  mission3Sheet.getRange(21,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,43,FALSE)),"")');
  mission3Sheet.getRange(22,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,46,FALSE)),"")');
  mission3Sheet.getRange(23,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,49,FALSE)),"")');
  
  mission3Sheet.getRange(24,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,52,FALSE)),"")');
  mission3Sheet.getRange(25,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,55,FALSE)),"")');
  mission3Sheet.getRange(26,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,58,FALSE)),"")');
  mission3Sheet.getRange(27,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,61,FALSE)),"")');

  mission3Sheet.getRange('\'Mission 3\'!A8:A27').setDataValidation(SpreadsheetApp.newDataValidation()
  .setAllowInvalid(false)
  .requireValueInRange(mission3Sheet.getRange('CharsData!$A:$A'), true)
  .build());
  mission3Sheet.getRange('\'Mission 3\'!A28:A37').setDataValidation(SpreadsheetApp.newDataValidation()
  .setAllowInvalid(false)
  .requireValueInRange(mission3Sheet.getRange('ShipsData!$A:$A'), true)
  .build());
  
}

function rebuildMissionFour(){
  
  var ui = SpreadsheetApp.getUi();

  mission4Sheet.getRange('A8:A37').activate();
  mission4Sheet.getRange('A8:A37').clearDataValidations();

  mission4Sheet.getRange(8,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,2,FALSE)),"")');
  mission4Sheet.getRange(9,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,5,FALSE)),"")');
  mission4Sheet.getRange(10,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,8,FALSE)),"")');
  mission4Sheet.getRange(11,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,11,FALSE)),"")');
  mission4Sheet.getRange(12,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,14,FALSE)),"")');
  mission4Sheet.getRange(13,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,17,FALSE)),"")');

  mission4Sheet.getRange(14,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,20,FALSE)),"")');
  mission4Sheet.getRange(15,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,23,FALSE)),"")');
  mission4Sheet.getRange(16,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,26,FALSE)),"")');
  mission4Sheet.getRange(17,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,29,FALSE)),"")');
  mission4Sheet.getRange(18,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,32,FALSE)),"")');
  mission4Sheet.getRange(19,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,35,FALSE)),"")');
  mission4Sheet.getRange(20,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,38,FALSE)),"")');
  mission4Sheet.getRange(21,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,41,FALSE)),"")');
  mission4Sheet.getRange(22,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,44,FALSE)),"")');
  mission4Sheet.getRange(23,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,47,FALSE)),"")');
  
  mission4Sheet.getRange(24,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,50,FALSE)),"")');
  mission4Sheet.getRange(25,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,53,FALSE)),"")');
  mission4Sheet.getRange(26,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,56,FALSE)),"")');
  mission4Sheet.getRange(27,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,59,FALSE)),"")');
  
  mission4Sheet.getRange(28,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,62,FALSE)),"")');
  mission4Sheet.getRange(29,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,63,FALSE)),"")');
  mission4Sheet.getRange(30,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,64,FALSE)),"")');
  mission4Sheet.getRange(31,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,65,FALSE)),"")');
  mission4Sheet.getRange(32,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,66,FALSE)),"")');
  mission4Sheet.getRange(33,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,67,FALSE)),"")');
  mission4Sheet.getRange(34,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,68,FALSE)),"")');
  mission4Sheet.getRange(35,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,69,FALSE)),"")');
  mission4Sheet.getRange(36,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,70,FALSE)),"")');
  mission4Sheet.getRange(37,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,71,FALSE)),"")');

  mission4Sheet.getRange(8,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,3,FALSE)),"")');
  mission4Sheet.getRange(9,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,6,FALSE)),"")');
  mission4Sheet.getRange(10,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,9,FALSE)),"")');
  mission4Sheet.getRange(11,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,12,FALSE)),"")');
  mission4Sheet.getRange(12,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,15,FALSE)),"")');
  mission4Sheet.getRange(13,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,18,FALSE)),"")');

  mission4Sheet.getRange(14,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,21,FALSE)),"")');
  mission4Sheet.getRange(15,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,24,FALSE)),"")');
  mission4Sheet.getRange(16,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,27,FALSE)),"")');
  mission4Sheet.getRange(17,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,30,FALSE)),"")');
  mission4Sheet.getRange(18,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,33,FALSE)),"")');
  mission4Sheet.getRange(19,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,36,FALSE)),"")');
  mission4Sheet.getRange(20,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,39,FALSE)),"")');
  mission4Sheet.getRange(21,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,42,FALSE)),"")');
  mission4Sheet.getRange(22,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,45,FALSE)),"")');
  mission4Sheet.getRange(23,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,48,FALSE)),"")');
  
  mission4Sheet.getRange(24,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,51,FALSE)),"")');
  mission4Sheet.getRange(25,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,54,FALSE)),"")');
  mission4Sheet.getRange(26,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,57,FALSE)),"")');
  mission4Sheet.getRange(27,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,60,FALSE)),"")');

  mission4Sheet.getRange(8,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,4,FALSE)),"")');
  mission4Sheet.getRange(9,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,7,FALSE)),"")');
  mission4Sheet.getRange(10,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,10,FALSE)),"")');
  mission4Sheet.getRange(11,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,13,FALSE)),"")');
  mission4Sheet.getRange(12,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,16,FALSE)),"")');
  mission4Sheet.getRange(13,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,19,FALSE)),"")');
  
  mission4Sheet.getRange(14,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,22,FALSE)),"")');
  mission4Sheet.getRange(15,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,25,FALSE)),"")');
  mission4Sheet.getRange(16,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,28,FALSE)),"")');
  mission4Sheet.getRange(17,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,31,FALSE)),"")');
  mission4Sheet.getRange(18,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,34,FALSE)),"")');
  mission4Sheet.getRange(19,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,37,FALSE)),"")');
  mission4Sheet.getRange(20,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,40,FALSE)),"")');
  mission4Sheet.getRange(21,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,43,FALSE)),"")');
  mission4Sheet.getRange(22,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,46,FALSE)),"")');
  mission4Sheet.getRange(23,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,49,FALSE)),"")');
  
  mission4Sheet.getRange(24,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,52,FALSE)),"")');
  mission4Sheet.getRange(25,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,55,FALSE)),"")');
  mission4Sheet.getRange(26,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,58,FALSE)),"")');
  mission4Sheet.getRange(27,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,61,FALSE)),"")');
  
  mission4Sheet.getRange('\'Mission 4\'!A8:A27').setDataValidation(SpreadsheetApp.newDataValidation()
  .setAllowInvalid(false)
  .requireValueInRange(mission4Sheet.getRange('CharsData!$A:$A'), true)
  .build());
  mission4Sheet.getRange('\'Mission 4\'!A28:A37').setDataValidation(SpreadsheetApp.newDataValidation()
  .setAllowInvalid(false)
  .requireValueInRange(mission4Sheet.getRange('ShipsData!$A:$A'), true)
  .build());

}

function rebuildMissionFive(){
  
  var ui = SpreadsheetApp.getUi();

  mission5Sheet.getRange('A8:A37').activate();
  mission5Sheet.getRange('A8:A37').clearDataValidations();

  mission5Sheet.getRange(8,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,2,FALSE)),"")');
  mission5Sheet.getRange(9,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,5,FALSE)),"")');
  mission5Sheet.getRange(10,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,8,FALSE)),"")');
  mission5Sheet.getRange(11,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,11,FALSE)),"")');
  mission5Sheet.getRange(12,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,14,FALSE)),"")');
  mission5Sheet.getRange(13,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,17,FALSE)),"")');

  mission5Sheet.getRange(14,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,20,FALSE)),"")');
  mission5Sheet.getRange(15,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,23,FALSE)),"")');
  mission5Sheet.getRange(16,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,26,FALSE)),"")');
  mission5Sheet.getRange(17,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,29,FALSE)),"")');
  mission5Sheet.getRange(18,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,32,FALSE)),"")');
  mission5Sheet.getRange(19,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,35,FALSE)),"")');
  mission5Sheet.getRange(20,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,38,FALSE)),"")');
  mission5Sheet.getRange(21,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,41,FALSE)),"")');
  mission5Sheet.getRange(22,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,44,FALSE)),"")');
  mission5Sheet.getRange(23,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,47,FALSE)),"")');
  
  mission5Sheet.getRange(24,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,50,FALSE)),"")');
  mission5Sheet.getRange(25,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,53,FALSE)),"")');
  mission5Sheet.getRange(26,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,56,FALSE)),"")');
  mission5Sheet.getRange(27,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,59,FALSE)),"")');
  
  mission5Sheet.getRange(28,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,62,FALSE)),"")');
  mission5Sheet.getRange(29,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,63,FALSE)),"")');
  mission5Sheet.getRange(30,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,64,FALSE)),"")');
  mission5Sheet.getRange(31,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,65,FALSE)),"")');
  mission5Sheet.getRange(32,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,66,FALSE)),"")');
  mission5Sheet.getRange(33,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,67,FALSE)),"")');
  mission5Sheet.getRange(34,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,68,FALSE)),"")');
  mission5Sheet.getRange(35,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,69,FALSE)),"")');
  mission5Sheet.getRange(36,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,70,FALSE)),"")');
  mission5Sheet.getRange(37,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,71,FALSE)),"")');

  mission5Sheet.getRange(8,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,3,FALSE)),"")');
  mission5Sheet.getRange(9,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,6,FALSE)),"")');
  mission5Sheet.getRange(10,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,9,FALSE)),"")');
  mission5Sheet.getRange(11,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,12,FALSE)),"")');
  mission5Sheet.getRange(12,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,15,FALSE)),"")');
  mission5Sheet.getRange(13,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,18,FALSE)),"")');

  mission5Sheet.getRange(14,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,21,FALSE)),"")');
  mission5Sheet.getRange(15,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,24,FALSE)),"")');
  mission5Sheet.getRange(16,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,27,FALSE)),"")');
  mission5Sheet.getRange(17,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,30,FALSE)),"")');
  mission5Sheet.getRange(18,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,33,FALSE)),"")');
  mission5Sheet.getRange(19,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,36,FALSE)),"")');
  mission5Sheet.getRange(20,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,39,FALSE)),"")');
  mission5Sheet.getRange(21,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,42,FALSE)),"")');
  mission5Sheet.getRange(22,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,45,FALSE)),"")');
  mission5Sheet.getRange(23,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,48,FALSE)),"")');
  
  mission5Sheet.getRange(24,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,51,FALSE)),"")');
  mission5Sheet.getRange(25,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,54,FALSE)),"")');
  mission5Sheet.getRange(26,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,57,FALSE)),"")');
  mission5Sheet.getRange(27,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,60,FALSE)),"")');

  mission5Sheet.getRange(8,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,4,FALSE)),"")');
  mission5Sheet.getRange(9,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,7,FALSE)),"")');
  mission5Sheet.getRange(10,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,10,FALSE)),"")');
  mission5Sheet.getRange(11,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,13,FALSE)),"")');
  mission5Sheet.getRange(12,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,16,FALSE)),"")');
  mission5Sheet.getRange(13,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,19,FALSE)),"")');
  
  mission5Sheet.getRange(14,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,22,FALSE)),"")');
  mission5Sheet.getRange(15,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,25,FALSE)),"")');
  mission5Sheet.getRange(16,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,28,FALSE)),"")');
  mission5Sheet.getRange(17,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,31,FALSE)),"")');
  mission5Sheet.getRange(18,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,34,FALSE)),"")');
  mission5Sheet.getRange(19,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,37,FALSE)),"")');
  mission5Sheet.getRange(20,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,40,FALSE)),"")');
  mission5Sheet.getRange(21,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,43,FALSE)),"")');
  mission5Sheet.getRange(22,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,46,FALSE)),"")');
  mission5Sheet.getRange(23,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,49,FALSE)),"")');
  
  mission5Sheet.getRange(24,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,52,FALSE)),"")');
  mission5Sheet.getRange(25,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,55,FALSE)),"")');
  mission5Sheet.getRange(26,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,58,FALSE)),"")');
  mission5Sheet.getRange(27,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,61,FALSE)),"")');

  mission5Sheet.getRange('\'Mission 5\'!A8:A27').setDataValidation(SpreadsheetApp.newDataValidation()
  .setAllowInvalid(false)
  .requireValueInRange(mission5Sheet.getRange('CharsData!$A:$A'), true)
  .build());
  mission5Sheet.getRange('\'Mission 5\'!A28:A37').setDataValidation(SpreadsheetApp.newDataValidation()
  .setAllowInvalid(false)
  .requireValueInRange(mission5Sheet.getRange('ShipsData!$A:$A'), true)
  .build());
  
}

function rebuildMissionSix(){
  
  var ui = SpreadsheetApp.getUi();

  mission6Sheet.getRange('A8:A37').activate();
  mission6Sheet.getRange('A8:A37').clearDataValidations();

  mission6Sheet.getRange(8,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,2,FALSE)),"")');
  mission6Sheet.getRange(9,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,5,FALSE)),"")');
  mission6Sheet.getRange(10,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,8,FALSE)),"")');
  mission6Sheet.getRange(11,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,11,FALSE)),"")');
  mission6Sheet.getRange(12,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,14,FALSE)),"")');
  mission6Sheet.getRange(13,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,17,FALSE)),"")');

  mission6Sheet.getRange(14,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,20,FALSE)),"")');
  mission6Sheet.getRange(15,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,23,FALSE)),"")');
  mission6Sheet.getRange(16,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,26,FALSE)),"")');
  mission6Sheet.getRange(17,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,29,FALSE)),"")');
  mission6Sheet.getRange(18,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,32,FALSE)),"")');
  mission6Sheet.getRange(19,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,35,FALSE)),"")');
  mission6Sheet.getRange(20,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,38,FALSE)),"")');
  mission6Sheet.getRange(21,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,41,FALSE)),"")');
  mission6Sheet.getRange(22,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,44,FALSE)),"")');
  mission6Sheet.getRange(23,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,47,FALSE)),"")');
  
  mission6Sheet.getRange(24,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,50,FALSE)),"")');
  mission6Sheet.getRange(25,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,53,FALSE)),"")');
  mission6Sheet.getRange(26,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,56,FALSE)),"")');
  mission6Sheet.getRange(27,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,59,FALSE)),"")');
  
  mission6Sheet.getRange(28,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,62,FALSE)),"")');
  mission6Sheet.getRange(29,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,63,FALSE)),"")');
  mission6Sheet.getRange(30,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,64,FALSE)),"")');
  mission6Sheet.getRange(31,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,65,FALSE)),"")');
  mission6Sheet.getRange(32,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,66,FALSE)),"")');
  mission6Sheet.getRange(33,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,67,FALSE)),"")');
  mission6Sheet.getRange(34,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,68,FALSE)),"")');
  mission6Sheet.getRange(35,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,69,FALSE)),"")');
  mission6Sheet.getRange(36,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,70,FALSE)),"")');
  mission6Sheet.getRange(37,1).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,71,FALSE)),"")');

  mission6Sheet.getRange(8,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,3,FALSE)),"")');
  mission6Sheet.getRange(9,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,6,FALSE)),"")');
  mission6Sheet.getRange(10,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,9,FALSE)),"")');
  mission6Sheet.getRange(11,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,12,FALSE)),"")');
  mission6Sheet.getRange(12,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,15,FALSE)),"")');
  mission6Sheet.getRange(13,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,18,FALSE)),"")');

  mission6Sheet.getRange(14,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,21,FALSE)),"")');
  mission6Sheet.getRange(15,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,24,FALSE)),"")');
  mission6Sheet.getRange(16,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,27,FALSE)),"")');
  mission6Sheet.getRange(17,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,30,FALSE)),"")');
  mission6Sheet.getRange(18,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,33,FALSE)),"")');
  mission6Sheet.getRange(19,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,36,FALSE)),"")');
  mission6Sheet.getRange(20,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,39,FALSE)),"")');
  mission6Sheet.getRange(21,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,42,FALSE)),"")');
  mission6Sheet.getRange(22,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,45,FALSE)),"")');
  mission6Sheet.getRange(23,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,48,FALSE)),"")');
  
  mission6Sheet.getRange(24,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,51,FALSE)),"")');
  mission6Sheet.getRange(25,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,54,FALSE)),"")');
  mission6Sheet.getRange(26,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,57,FALSE)),"")');
  mission6Sheet.getRange(27,2).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,60,FALSE)),"")');

  mission6Sheet.getRange(8,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,4,FALSE)),"")');
  mission6Sheet.getRange(9,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,7,FALSE)),"")');
  mission6Sheet.getRange(10,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,10,FALSE)),"")');
  mission6Sheet.getRange(11,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,13,FALSE)),"")');
  mission6Sheet.getRange(12,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,16,FALSE)),"")');
  mission6Sheet.getRange(13,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,19,FALSE)),"")');
  
  mission6Sheet.getRange(14,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,22,FALSE)),"")');
  mission6Sheet.getRange(15,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,25,FALSE)),"")');
  mission6Sheet.getRange(16,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,28,FALSE)),"")');
  mission6Sheet.getRange(17,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,31,FALSE)),"")');
  mission6Sheet.getRange(18,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,34,FALSE)),"")');
  mission6Sheet.getRange(19,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,37,FALSE)),"")');
  mission6Sheet.getRange(20,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,40,FALSE)),"")');
  mission6Sheet.getRange(21,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,43,FALSE)),"")');
  mission6Sheet.getRange(22,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,46,FALSE)),"")');
  mission6Sheet.getRange(23,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,49,FALSE)),"")');
  
  mission6Sheet.getRange(24,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,52,FALSE)),"")');
  mission6Sheet.getRange(25,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,55,FALSE)),"")');
  mission6Sheet.getRange(26,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,58,FALSE)),"")');
  mission6Sheet.getRange(27,3).setValue('=IFERROR(IF($A$6="No Selection", "", VLOOKUP($A$6,Missions,61,FALSE)),"")');

  mission6Sheet.getRange('\'Mission 6\'!A8:A27').setDataValidation(SpreadsheetApp.newDataValidation()
  .setAllowInvalid(false)
  .requireValueInRange(mission6Sheet.getRange('CharsData!$A:$A'), true)
  .build());
  mission6Sheet.getRange('\'Mission 6\'!A28:A37').setDataValidation(SpreadsheetApp.newDataValidation()
  .setAllowInvalid(false)
  .requireValueInRange(mission6Sheet.getRange('ShipsData!$A:$A'), true)
  .build());
  
}
