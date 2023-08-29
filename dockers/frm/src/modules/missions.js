// Returning Missions to the Farming Road Map
export default async function () {
  return new Promise((res) => {
    const req = fetch('https://sheets.googleapis.com/v4/spreadsheets/GOOGLESHEETLINK/values/Missions!A:BT?key=SECRETKEY')
      .then(function (missionsAPIres) {
        //Making sure the data is proper JSON
        var contentType = missionsAPIres.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return missionsAPIres.json();
        } else {
          throw "Missions Data Not Available";
        }
      })
      .then(function (missionsRes) {
        var missionsDataArray = [];
        missionsDataArray = missionsRes;
        var missionsReturn = [];

        for (var entry = 1, entries = missionsDataArray.values.length; entry < entries; entry++) {
          var missionsReturnData = {
            missions: missionsDataArray.values[entry][0],
            main1: missionsDataArray.values[entry][1],
            gm1: missionsDataArray.values[entry][2],
            rm1: missionsDataArray.values[entry][3],
            main2: missionsDataArray.values[entry][4],
            gm2: missionsDataArray.values[entry][5],
            rm2: missionsDataArray.values[entry][6],
            main3: missionsDataArray.values[entry][7],
            gm3: missionsDataArray.values[entry][8],
            rm3: missionsDataArray.values[entry][9],
            main4: missionsDataArray.values[entry][10],
            gm4: missionsDataArray.values[entry][11],
            rm4: missionsDataArray.values[entry][12],
            main5: missionsDataArray.values[entry][13],
            gm5: missionsDataArray.values[entry][14],
            rm5: missionsDataArray.values[entry][15],
            main6: missionsDataArray.values[entry][16],
            gm6: missionsDataArray.values[entry][17],
            rm6: missionsDataArray.values[entry][18],
            side1: missionsDataArray.values[entry][19],
            gs1: missionsDataArray.values[entry][20],
            rs1: missionsDataArray.values[entry][21],
            side2: missionsDataArray.values[entry][22],
            gs2: missionsDataArray.values[entry][23],
            rs2: missionsDataArray.values[entry][24],
            side3: missionsDataArray.values[entry][25],
            gs3: missionsDataArray.values[entry][26],
            rs3: missionsDataArray.values[entry][27],
            side4: missionsDataArray.values[entry][28],
            gs4: missionsDataArray.values[entry][29],
            rs4: missionsDataArray.values[entry][30],
            side5: missionsDataArray.values[entry][31],
            gs5: missionsDataArray.values[entry][32],
            rs5: missionsDataArray.values[entry][33],
            side6: missionsDataArray.values[entry][34],
            gs6: missionsDataArray.values[entry][35],
            rs6: missionsDataArray.values[entry][36],
            side7: missionsDataArray.values[entry][37],
            gs7: missionsDataArray.values[entry][38],
            rs7: missionsDataArray.values[entry][39],
            side8: missionsDataArray.values[entry][40],
            gs8: missionsDataArray.values[entry][41],
            rs8: missionsDataArray.values[entry][42],
            side9: missionsDataArray.values[entry][43],
            gs9: missionsDataArray.values[entry][44],
            rs9: missionsDataArray.values[entry][45],
            side10: missionsDataArray.values[entry][46],
            gs10: missionsDataArray.values[entry][47],
            rs10: missionsDataArray.values[entry][48],
            legend1: missionsDataArray.values[entry][49],
            gl1: missionsDataArray.values[entry][50],
            rl1: missionsDataArray.values[entry][51],
            legend2: missionsDataArray.values[entry][52],
            gl2: missionsDataArray.values[entry][53],
            rl2: missionsDataArray.values[entry][54],
            legend3: missionsDataArray.values[entry][55],
            gl3: missionsDataArray.values[entry][56],
            rl3: missionsDataArray.values[entry][57],
            legend4: missionsDataArray.values[entry][58],
            gl4: missionsDataArray.values[entry][59],
            rl4: missionsDataArray.values[entry][60],
            ship1: missionsDataArray.values[entry][61],
            ship2: missionsDataArray.values[entry][62],
            ship3: missionsDataArray.values[entry][63],
            ship4: missionsDataArray.values[entry][64],
            ship5: missionsDataArray.values[entry][65],
            ship6: missionsDataArray.values[entry][66],
            ship7: missionsDataArray.values[entry][67],
            ship8: missionsDataArray.values[entry][68],
            ship9: missionsDataArray.values[entry][69],
            ship10: missionsDataArray.values[entry][70],
            notes: missionsDataArray.values[entry][71],
          };

          missionsReturn.push(missionsReturnData);
        }

        res(missionsReturn)
      })
      .catch(function (err) {
        console.log(err);
      });
  })
}