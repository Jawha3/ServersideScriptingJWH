const {hrtime} = require("process");

module.exports = function(req, res){

    const timeStamp = new Date().toLocaleString();
    let logString = timeStamp;
    const startTime = hrtime();
    res.on("finish", function(){

        const duration = hrtime(startTime);
        logString += `
            Method: ${req.method}
            URL: ${req.url}
            Status: ${res.statusCode} ${res.statusMessage}
            Duration: ${duration[0]}s ${duration[1]/1000000}ms
            `;
        console.log(logString);
    });

}