// Return Ship Data
export default async function () {
    return new Promise((res) => {
        const req = fetch("https://sheets.googleapis.com/v4/spreadsheets/GOOGLESHEETLINK/values/ShipsData!A:H?key=SECRETKEY")
            .then(function (shipList) {
                // Making sure the Data is proper JSON if not start swgoh.help script
                var contentType = shipList.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    return shipList.json();
                } else {
                    throw "Ship List Not Available";
                }
            })
            .then(function (shipListData) {
                var shipListInfo = [];
                shipListInfo = shipListData;
                var shipListReturn = [];

                for (
                    var entry = 1, entries = shipListInfo.values.length;
                    entry < entries;
                    entry++
                ) {
                    var charListEntry = {
                        name: shipListInfo.values[entry][0],
                        role: shipListInfo.values[entry][6],
                        alignment: shipListInfo.values[entry][4],
                        affiliations: shipListInfo.values[entry][5],
                        shardstounlock: shipListInfo.values[entry][7],
                        base_id: shipListInfo.values[entry][1],
                    };
                    shipListReturn.push(charListEntry);
                }

                res(shipListReturn);
            })
            .catch(function (err) {
                console.log(err);
            });
    })
}