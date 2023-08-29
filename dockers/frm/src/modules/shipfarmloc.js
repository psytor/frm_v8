// Returning Ships Farming Locations
export default async function () {
    return new Promise((res) => {
        const req = fetch('https://sheets.googleapis.com/v4/spreadsheets/GOOGLESHEETLINK/values/ShipsFarmLocation!A:F?key=SECRETKEY')
            .then(function (shipFarmLocAPIRes) {
                var contentType = shipFarmLocAPIRes.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    return shipFarmLocAPIRes.json();
                } else {
                    throw "Ships Farm Location Data is not available";
                }
            })
            .then(function (shipFarmRes) {
                var shipFarmData = [];
                shipFarmData = shipFarmRes;
                var shipFarmReturn = [];

                for (var entry = 1, entries = shipFarmData.values.length; entry < entries; entry++) {
                    var ppReturnData = {
                        ship: shipFarmData.values[entry][0],
                        location: shipFarmData.values[entry][1],
                        level: shipFarmData.values[entry][2],
                        eventname: shipFarmData.values[entry][4],
                        locationvalue: shipFarmData.values[entry][5]
                    };
                    shipFarmReturn.push(ppReturnData)
                }
                res(shipFarmReturn);
            })
            .catch(function (err) {
                console.log(err);
            });
    })
}