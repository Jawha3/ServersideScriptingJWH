const helpers = require("./helpers");
const logger = require("./logger");
const api = {};

api["/api/duck"] = require("./api/duck");
api["/api/cat"] = require("./api/cat");
api["/api/animal"] = require("./api/animal");


module.exports = function(req, res){

    logger(req, res);
    // const url = req.url;
    const endpoint = new URL(req.url, "http://localhost:3003").pathname;

    // const rx = new RegExp("^\/((css|img|js)\/)?\w+\.(html|css|js|png|jpe?g)$")

    const regEx = /^\/((css|img|js)\/)?[\w-]+\.(html|css|js|png|jpe?g)$/i;

    let result = endpoint.match(regEx); 
    if (result) {
        // helpers.sendFile(req, res, "./static/" + result[0]);
        helpers.streamFile(req, res, "./static/" + result[0]);
        return;
    }

    // Hvis jeg er her er der ikke fundet et match i tidligere regex
    // const apiRx = /^\/api\/\w+$/;
    // result = endpoint.match(apiRx);
    // console.log(result);

    // if(result){
    //     // Match fundet
    //     if (api[result[0]]) {
    //         if (api[result[0]][req.method]) {
    //             //Metode matcher req.method
    //             api[result[0]][req.method].handler(req, res);
    //             return;
    //         }
    //         helpers.send(req, res, {msg: "Metode ikke tilladt her."}, 405);
    //         return;
    //     }
    // }
    
    // console.log(result);

    //// RegEx med parameter

    // const apiRxParam = /^(\/api\/\w+)(\/\w+)?/;
    // // /^(\/api\/\w+)((\/\w+)*)$/   ----Tillader flere parameter
    // result = endpoint.match(apiRxParam);
    // console.log(result);
    
    // if(result){
    //     // Match fundet
    //     if (api[result[1]]) {
    //         if (api[result[1]][req.method]) {
    //             //Metode matcher req.method
    //             api[result[1]][req.method].handler(req, res, result[2]);
    //             return;
    //         }
    //         helpers.send(req, res, {msg: "Metode ikke tilladt her."}, 405);
    //         return;
    //     }

    //     console.log(result);
    // }

// Regex med parameter og groups

const apiRxParam = /^(?<route>\/api\/\w+)(?<id>(\/\w+)*)$/
// /^(\/api\/\w+)((\/\w+)*)$/   ----Tillader flere parameter
result = endpoint.match(apiRxParam);
console.log(result);

if(result){
    // Match fundet
    if (api[result.groups.route] && [result.groups.id] == null) {
        if (api[result.groups.route][req.method]) {
            //Metode matcher req.method
            api[result.groups.route][req.method].handler(req, res, result.groups.id);
            return;
        }
        helpers.send(req, res, {msg: "Metode ikke tilladt her."}, 405);
        return;
    }

    if (api[result.groups.route] && [result.groups.id] != null) {
        if (api[result.groups.route][req.method]) {
            //Metode matcher req.method
            api[result.groups.route][req.method].handler(req, res, result.groups.id);
            return;
        }
        helpers.send(req, res, {msg: "Metode ikke tilladt her."}, 405);
        return;
    }

    console.log(result);
}

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