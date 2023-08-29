export default async function () {
    return new Promise((res) => {
        const req =fetch("https://swgoh.gg/api/characters")
        .then(function (charList) {
            var contentType = charList.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                return charList.json()
            } else {
                throw "Character List Not Available"
            }
        })
        .then(function(characters){
            res(characters)
        })
    })
    .catch(function(err){
        console.log(err)
    })
}