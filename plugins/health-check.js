
module.exports = {

    requestReceived: function (req, res, next) {

        if(req.prerender.url==="healthcheck"){
            console.log("Before health check");
            res.send(200,"OK");

        }else {
            next();
        }
    },


};
