
const {send} = require("../helpers");
module.exports = {

    GET: {
        handler: function(req, res, p) {
            let params = p !== ""? p.replace("/", "").split("/"): null;
            send(req, res, {says: "Quack", method: req.method, param: params});
        }
        
        
    },

    POST: {
        handler: function(req, res) {
            
            send(req, res, {says: "Quack", method: req.method});

        }
    }
}