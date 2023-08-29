// Return Character Data
export default async function () {
    return new Promise((res) => {
        const req = fetch("https://sheets.googleapis.com/v4/spreadsheets/GOOGLESHEETLINK/values/CharsData!A:H?key=SECRETKEY")
            .then(function (charList) {
                // Making sure the Data is proper JSON if not start swgoh.help script
                var contentType = charList.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    return charList.json();
                } else {
                    throw "Character List Not Available";
                }
            })
            .then(function (charListData) {
                var charListInfo = [];
                charListInfo = charListData;
                var charListReturn = [];

                for (
                    var entry = 1, entries = charListInfo.values.length;
                    entry < entries;
                    entry++
                ) {
                    var charListEntry = {
                        name: charListInfo.values[entry][0],
                        role: charListInfo.values[entry][6],
                        alignment: charListInfo.values[entry][4],
                        affiliations: charListInfo.values[entry][5],
                        shardstounlock: charListInfo.values[entry][7],
                        base_id: charListInfo.values[entry][1],
                    };
                    charListReturn.push(charListEntry);
                }

                res(charListReturn);
            })
            .catch(function (err) {
                console.log(err);
            });
    })
}