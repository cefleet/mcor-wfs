var express = require('express');
var app = express();
app.use(express.bodyParser());

var wfs = require('./lib/wfs');

//catchall for the api
app.all('/wfs', function(req,res, next){
    wfs.request(req,res,function(){});                
});

//process.env.PORT needs to be changed to a port #
console.log(process.env.IP);
app.listen(process.env.PORT);
//app.listen('1112');