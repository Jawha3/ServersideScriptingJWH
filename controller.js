const helpers = require("./helpers");

module.exports = function(req, res){

    // const url = req.url;
    const endpoint = new URL(req.url, "http://localhost:3003").pathname;

    // const rx = new RegExp("^\/((css|img|js)\/)?\w+\.(html|css|js|png|jpe?g)$")

    const regEx = /^\/((css|img|js)\/)?\w+\.(html|css|js|png|jpe?g)$/;

    let result = endpoint.match(regEx); 
    if (result) {
        helpers.sendFile(req, res, "./static/" + result[0]);
        return;
    }
    
    console.log(result);

    // if (endpoint === "/index.html") {
    //     helpers.sendFile(req, res, "./static/index.html");
    //     return;
    // }

    // helpers.send(req, res, {message: "'Resource' " + endpoint + " 'Simon go bonk'"}, 404);
    helpers.send(req, res, {message: `Resource '${endpoint}' Simon go bonk`}, 404);



    // helpers.send(req, res, {besked: "Her kommer beskeden."})

    // res.statusCode = 200;
    // res.setHeader("Content-type", "text/plain");
    // res.end("Hello Hollow World...")
   

}