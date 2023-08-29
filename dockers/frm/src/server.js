// Application Import Declarations.
// Import of external modules

import express from 'express';
const app = express();
import { createInterface } from 'readline';
import { once } from 'events';
import { Readable } from 'stream'
import * as fs from "node:fs";

export { gameData, localENG }


// Characters Data
import chardata from "./modules/chardata.js";
// Characters Farm Location Data
import charfarmloc from "./modules/charfarmloc.js";

// Ships Data
import shipdata from "./modules/shipdata.js";
// Ships Farm Location Data
import shipfarmloc from "./modules/shipfarmloc.js";

// Missions Data
import missions from "./modules/missions.js";

// Journey Guide Data
import journey from "./modules/journey.js";

// SWGOH Data
import player from "./modules/player.js";

// Serving Index.html
app.get("/", (req, res) => {
    res.sendFile('./public/index.html', { root: '.' })
});

// Serving Characters Data
app.get("/swgoh-data/chardata", async function (req, res) {
    const units = await chardata(req)
        .then(function (json) {
            res.setHeader("Content-Type", "application/json");
            return res.send(json);
        })
        .catch(function (err) {
            console.log(err);
        });
});

// Serving Characters Farming Location
app.get("/swgoh-data/charfarmlocation", async function (req, res) {
    const farmLoc = await charfarmloc(req)
        .then(function (json) {
            res.setHeader("Content-Type", "application/json");
            return res.send(json);
        })
        .catch(function (err) {
            console.log(err);
        });
});

// Serving Ships Data
app.get("/swgoh-data/shipdata", async function (req, res) {
    const units = await shipdata(req)
        .then(function (json) {
            res.setHeader("Content-Type", "application/json");
            return res.send(json);
        })
        .catch(function (err) {
            console.log(err);
        });
});

// Serving Ships Farming Location
app.get("/swgoh-data/shipfarmlocation", async function (req, res) {
    const farmLoc = await shipfarmloc(req)
        .then(function (json) {
            res.setHeader("Content-Type", "application/json");
            return res.send(json);
        })
        .catch(function (err) {
            console.log(err);
        });
});

// Serving Missions - Coming from Google Sheets
app.get('/swgoh-data/missions', async function (req, res) {
    const missionRes = await missions(req)
        .then(function (json) {
            res.setHeader("Content-Type", "application/json");
            return res.send(json);
        })
        .catch(function (err) {
            console.log(err);
        });
})

// Serving Journey Guide helper - Coming from Google Sheets
app.get('/swgoh-data/journeyguide', async function (req, res) {
    const journeyguide = await journey(req)
        .then(function (json) {
            res.setHeader("Content-Type", "application/json");
            return res.send(json);
        })
        .catch(function (err) {
            console.log(err)
        })
})

app.get("/swgoh-data/dataversion", function (req, res) {
    return fetch(
        "https://sheets.googleapis.com/v4/spreadsheets/GOOGLESHEET/values/DataVersions!A1:C7?key=SECRETKEY"
    )
        .then(function (ver) {
            var contentType = ver.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                return ver.json();
            } else {
                throw "Versions are not available";
            }
        })
        .then(function (verData) {
            var verJSON = [];
            verJSON = verData;
            var verReturn = [];

            for (
                let entry = 0, entries = verData.values.length;
                entry < entries;
                entry++
            ) {
                var verReturnData = {
                    data: verData.values[entry][0],
                    version: verData.values[entry][1],
                    link: verData.values[entry][2]
                };

                verReturn.push(verReturnData);
            }

            return verReturn;
        })
        .then(function (json) {
            res.setHeader("Content-Type", "application/json");
            return res.send(json);
        })
        .catch(function (err) {
            console.log(err);
        });
});

// Serving Player Data
app.get("/frm/player/:allycode", async function (req, res) {
    const playerData = await player(req.params.allycode)
        .then(function (json) {
            res.setHeader("Content-Type", "application/json");
            return res.send(json);
        })
});

// Serving Player with Auto-Refresh in Google Sheets Data
app.get("/frm/auto/:allycode", async function (req, res) {
    const playerData = await player(req.params.allycode)
        .then(function (json) {
            res.setHeader("Content-Type", "application/json");
            return res.send(json);
        })
});

app.listen(process.env.listenport, function () {
    console.log("Server listen on port " + process.env.listenport)
});

const processLocalizationLine = (line) => {
    if (line.startsWith('#')) return;
    let [key, val] = line.split(/\|/g).map(s => s.trim());
    if (!key || !val) return;
    return [key, val];
}

const processStreamByLine = async (fileStream) => {
    const langMap = {};

    try {
        const rl = createInterface({
            input: fileStream,
        });

        rl.on('line', (line) => {
            const result = processLocalizationLine(line);
            if (result) {
                const [key, val] = result;
                langMap[key] = val;
            }
        });

        await once(rl, 'close');
    } catch (err) {
        console.error(err);
    }

    return langMap;
};

const gameData = await gamedataMemory()
const localENG = await localENGMemory()

async function gamedataMemory() {
    return new Promise((gameData) => {
        var metadataPayload = {
            "payload": {
                "clientSpecs": {}
            },
            "enums": true
        }

        fetch('http://swgoh_comlink:2500/metadata', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(metadataPayload)
        })
            .then(function (res) {
                var contentType = res.headers.get("content-type")

                if (contentType && contentType.includes("application/json")) {
                    return res.json()
                }
            })
            .then(function (res) {
                var version = res.latestGamedataVersion

                var gamedataPayload = {
                    "payload":
                    {
                        "version": version,
                        "includePveUnits": false,
                        "requestSegment": 3
                    },
                    "enums": false
                }

                fetch('http://swgoh_comlink:2500/data', {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(gamedataPayload)
                })
                    .then(function (res) {
                        var contentType = res.headers.get('content-type')

                        if (contentType && contentType.includes('application/json')) {
                            return res.json()
                        }
                    })
                    .then(function (res) {
                        gameData(res.units)
                    })
            })

    })
}

async function localENGMemory() {
    return new Promise((localENG) => {
        fs.readdir('./metadata/local/', (err, files) => {
            if (err) console.log(err)
            else {
                if (files.length != 0) {
                    files.forEach(file => {
                        fs.unlink('./metadata/local/' + file, err => {
                            if (err) console.log(err)
                            else {
                                console.log('File Deleted ' + file)
                            }
                        })
                    })

                }
            }
        })
        var metadataPayload = {
            "payload": {
                "clientSpecs": {}
            },
            "enums": true
        }

        fetch('http://swgoh_comlink:2500/metadata', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(metadataPayload)
        })
            .then(function (res) {
                var contentType = res.headers.get('content-type')
                if (contentType && contentType.includes('application/json')) {
                    return res.json()
                }
            })
            .then(async function (res) {
                var version = res.latestLocalizationBundleVersion
                var localPayload = {
                    "unzip": true,
                    "payload":
                    {
                        "id": version
                    },
                    "enums": false
                }

                fetch('http://swgoh_comlink:2500/localization', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(localPayload)
                })
                    .then(function (res) {
                        var contentType = res.headers.get("content-type")

                        if (contentType && contentType.includes("application/json")) {
                            return res.json()
                        }
                    })
                    .then(async function (res) {
                        var localizationBundle = res;

                        // iterate languages
                        for (const [language, content] of Object.entries(localizationBundle)) {
                            let lang = language.replace(/(Loc_)|(.txt)/gi, '');

                            const fileStream = new Readable()
                            fileStream.push(content)
                            fileStream.push(null)
                            const langFile = await processStreamByLine(fileStream);


                            await fs.promises.writeFile('./metadata/local/' + `${lang}.json`, JSON.stringify(langFile), { encoding: "utf8" });
                        }
                    })
                    .then(function (res) {
                        var test = res
                        console.log(test)
                        localENG(JSON.parse(fs.readFileSync('./metadata/local/ENG_US.json', { encoding: "utf8" })))
                    })
            })
    })
}