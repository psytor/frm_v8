// Returning Chararter Farming Locations
export default async function () {
  return new Promise((res) => {
      const req = fetch('https://sheets.googleapis.com/v4/spreadsheets/GOOGLESHEETLINK/values/CharsFarmLocation!A:F?key=SECRETKEY')
          .then(function (charFarmLocAPIRes) {
              var contentType = charFarmLocAPIRes.headers.get("content-type");
              if (contentType && contentType.includes("application/json")) {
                  return charFarmLocAPIRes.json();
              } else {
                  throw "Characters Farm Location Data is not available";
              }
          })
          .then(function (charFarmRes) {
              var charFarmData = [];
              charFarmData = charFarmRes;
              var charFarmReturn = [];

              for (var entry = 1, entries = charFarmData.values.length; entry < entries; entry++) {
                  var ppReturnData = {
                      character: charFarmData.values[entry][0],
                      location: charFarmData.values[entry][1],
                      level: charFarmData.values[entry][2],
                      eventname: charFarmData.values[entry][4],
                      locationvalue: charFarmData.values[entry][5],
                  };
                  charFarmReturn.push(ppReturnData);
              }
              res(charFarmReturn)
          })
          .catch(function (err) {
              console.log(err);
          });
  })
}