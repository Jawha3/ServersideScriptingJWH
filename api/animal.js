
const {send} = require("../helpers");
const database = require("../data/database");

module.exports = {
    GET: {
        handler: async function(req, res, p) {
            let params = p !== ""? p.replace("/", "").split("/"): null;    

            if (params == null) {
                let queryResult = await database.SELECTALL();      
                console.log(queryResult);  
                send(req, res, {queryResult, params});       
            }

            if (params != null) {
                let queryResult = await database.SELECTALLBYID(params);      
                console.log(queryResult);  
                send(req, res, {queryResult, params});       
            }            
            
        }
                
    },
    POST: {
        handler: function(req, res, p) {
            let params = p !== ""? p.replace("/", "").split("/"): null;
            let param1 = params[0];
            let param2 = params[1];

            let queryResult = database.INSERT(param1, param2);
            send(req, res, {queryResult, params});           
        }
    },

    DELETE: {
        handler: function(req, res, p) {
            let params = p !== ""? p.replace("/", "").split("/"): null;
            
            let queryResult = database.DELETE(params);
            send(req, res, {queryResult, params});           
        }
    },

    PUT: {
        handler: function(req, res, p) {
            let params = p !== ""? p.replace("/", "").split("/"): null;
            let param1 = params[0];
            let param2 = params[1];
            let param3 = params[2];
            
            let queryResult = database.PUT(param1, param2, param3);
            send(req, res, {queryResult, params});           
        }
    }
}