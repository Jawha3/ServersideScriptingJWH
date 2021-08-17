
const {send} = require("../helpers");
module.exports = {

    GET: {
        handler: function(req, res, p) {
            
            send(req, res, {says: "Quack", method: req.method, param: p});
        }
        
        
    },

    POST: {
        handler: function(req, res) {
            
            send(req, res, {says: "Quack", method: req.method});

        }
    }
}