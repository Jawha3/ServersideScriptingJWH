// console.log("Hello World");

const http = require("http");
// Importere modul
const controller = require("./controller");

http.createServer(controller).listen(3003, function(){
    console.log("Server started, go to http://localhost:3003");
});



// const server = http.createServer(function(req, res){
//     res.statusCode = 200;
//     res.setHeader("Content-type", "text/plain");
//     res.write("Hello Hollow World...");
//     res.end();
// });
// server.listen(3003);

////Simplified
// http.createServer(function(req, res){
//     res.statusCode = 200;
//     res.setHeader("Content-type", "text/plain");
//     res.end("Hello Hollow World...")
// }).listen(3003);