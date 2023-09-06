function farmLocation(reference, rows){
  for (var r=0; r<rows.length; r++) {
  if ( rows[r][0] === reference ) {
      return r;
    }
  }
  return -1;
}

function findInRow(reference, rows) {
  for (var r=0; r<rows.length; r++) {
    if (rows[r][0] === reference ) {
      return r;
    }
  }
  return -1;  
}

function to7Stars(currentStars){

  var neededShards = 0;
  
  if (currentStars == 0){neededShards=330;}
  if (currentStars == 1){neededShards=320;}
  if (currentStars == 2){neededShards=305;}
  if (currentStars == 3){neededShards=280;}
  if (currentStars == 4){neededShards=250;}
  if (currentStars == 5){neededShards=185;}
  if (currentStars == 6){neededShards=100;}
  if (currentStars == 7){neededShards=0;}
  
  return neededShards;
  
}
