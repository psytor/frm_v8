// Returning Journe Guide Helper Data to the Farming Road Map
export default async function () {
  return new Promise((res) => {
      const req = fetch('https://sheets.googleapis.com/v4/spreadsheets/GOOGLESHEETLINK/values/JourneyGuide!A:BT?key=SECRETKEY')
          .then(function (jgAPIres) {
              var contentType = jgAPIres.headers.get("content-type");
              if (contentType && contentType.includes("application/json")) {
                  return jgAPIres.json();
              } else {
                  throw "Journey Guide Data Not Available";
              }
          })
          .then(function (jgRes) {
              var jgDataArray = [];
              jgDataArray = jgRes;
              var jgReturn = [];

              for (var entry = 1, entries = jgDataArray.values.length; entry < entries; entry++) {
                  var jgReturnData = {
                      legcharacter: jgDataArray.values[entry][0],
                      main1: jgDataArray.values[entry][1],
                      gm1: jgDataArray.values[entry][2],
                      rm1: jgDataArray.values[entry][3],
                      main2: jgDataArray.values[entry][4],
                      gm2: jgDataArray.values[entry][5],
                      rm2: jgDataArray.values[entry][6],
                      main3: jgDataArray.values[entry][7],
                      gm3: jgDataArray.values[entry][8],
                      rm3: jgDataArray.values[entry][9],
                      main4: jgDataArray.values[entry][10],
                      gm4: jgDataArray.values[entry][11],
                      rm4: jgDataArray.values[entry][12],
                      main5: jgDataArray.values[entry][13],
                      gm5: jgDataArray.values[entry][14],
                      rm5: jgDataArray.values[entry][15],
                      main6: jgDataArray.values[entry][16],
                      gm6: jgDataArray.values[entry][17],
                      rm6: jgDataArray.values[entry][18],
                      side1: jgDataArray.values[entry][19],
                      gs1: jgDataArray.values[entry][20],
                      rs1: jgDataArray.values[entry][21],
                      side2: jgDataArray.values[entry][22],
                      gs2: jgDataArray.values[entry][23],
                      rs2: jgDataArray.values[entry][24],
                      side3: jgDataArray.values[entry][25],
                      gs3: jgDataArray.values[entry][26],
                      rs3: jgDataArray.values[entry][27],
                      side4: jgDataArray.values[entry][28],
                      gs4: jgDataArray.values[entry][29],
                      rs4: jgDataArray.values[entry][30],
                      side5: jgDataArray.values[entry][31],
                      gs5: jgDataArray.values[entry][32],
                      rs5: jgDataArray.values[entry][33],
                      side6: jgDataArray.values[entry][34],
                      gs6: jgDataArray.values[entry][35],
                      rs6: jgDataArray.values[entry][36],
                      side7: jgDataArray.values[entry][37],
                      gs7: jgDataArray.values[entry][38],
                      rs7: jgDataArray.values[entry][39],
                      side8: jgDataArray.values[entry][40],
                      gs8: jgDataArray.values[entry][41],
                      rs8: jgDataArray.values[entry][42],
                      side9: jgDataArray.values[entry][43],
                      gs9: jgDataArray.values[entry][44],
                      rs9: jgDataArray.values[entry][45],
                      side10: jgDataArray.values[entry][46],
                      gs10: jgDataArray.values[entry][47],
                      rs10: jgDataArray.values[entry][48],
                      legend1: jgDataArray.values[entry][49],
                      gl1: jgDataArray.values[entry][50],
                      rl1: jgDataArray.values[entry][51],
                      legend2: jgDataArray.values[entry][52],
                      gl2: jgDataArray.values[entry][53],
                      rl2: jgDataArray.values[entry][54],
                      legend3: jgDataArray.values[entry][55],
                      gl3: jgDataArray.values[entry][56],
                      rl3: jgDataArray.values[entry][57],
                      legend4: jgDataArray.values[entry][58],
                      gl4: jgDataArray.values[entry][59],
                      rl4: jgDataArray.values[entry][60],
                      ship1: jgDataArray.values[entry][61],
                      ship2: jgDataArray.values[entry][62],
                      ship3: jgDataArray.values[entry][63],
                      ship4: jgDataArray.values[entry][64],
                      ship5: jgDataArray.values[entry][65],
                      ship6: jgDataArray.values[entry][66],
                      ship7: jgDataArray.values[entry][67],
                      ship8: jgDataArray.values[entry][68],
                      ship9: jgDataArray.values[entry][69],
                      ship10: jgDataArray.values[entry][70],
                      notes: jgDataArray.values[entry][71],
                  };

                  jgReturn.push(jgReturnData);
              }

              res(jgReturn);
          })
          .catch(function (err) {
              console.log(err);
          })
  })
}