// Main Imports
import express from 'express';
const app = express();

// Modules Imports
import ggCharacters from "./modules/ggCharacters.js"
import ggShips from "./modules/ggShips.js"

// Just an Information Index (and also to test if server is up without launching the API)
app.get("/", (req,res) =>{
    console.log("Serving index.html")
    res.sendFile('./public/index.html', {root: '.'})
});

// Launch the Module to Parse the Characters data
app.get("/characters", async function(req, res) {
    const characters = await ggCharacters(req)
    .then(function(json){
        res.setHeader("Content-Type", "application/json")
        return(res.send(json))
    })
    .catch(function (err){
        console.log(err)
    })
})

// Launch the Module to Parse the Ships data
app.get("/ships", async function(req, res) {
    const characters = await ggShips(req)
    .then(function(json){
        res.setHeader("Content-Type", "application/json")
        return(res.send(json))
    })
    .catch(function (err){
        console.log(err)
    })
})

// Port declared with Docker Environment listenport
app.listen(process.env.listenport, function(){
    console.log("Server now ready to listen on " + process.env.listenport)
});