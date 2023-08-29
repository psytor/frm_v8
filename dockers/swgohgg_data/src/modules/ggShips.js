export default async function () {
    return new Promise((res) => {
        const req =fetch("https://swgoh.gg/api/ships")
        .then(function (shipList) {
            var contentType = shipList.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                return shipList.json()
            } else {
                throw "Character List Not Available"
            }
        })
        .then(function(ships){
            res(ships)
        })
    })
    .catch(function(err){
        console.log(err)
    })
}