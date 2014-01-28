var dbQueries = require('./action.js');

var Rest = function Rest(req,res,callback){
        this.req = req;
        this.res = res;
        this.callback = callback;
};

Rest.prototype = {        
        restGET : function(){
                //TODO this needs to connect to the PG db and preform the actions
                dbQueries.action(
                    this.req.query, 
                    this.returnOutput.bind(this)
                );
        },
        // Not ready to delete this but not using this ATM
        restPOST : function(){        
                dbQueries.action(
                    this.req.query, 
                    this.returnOutput.bind(this)
                );
        },
        
        restPUT : function(){
                var params = {};                
                for(var item in this.req.query){
                    params[item] = this.req.query[item];
                }
                params.bodyParams = this.req.body.params;
                dbQueries.action(
                    this.req.query, 
                    this.returnOutput.bind(this)
                );
        },
        
        restDELETE : function(){
                dbQueries.action(
                    this.req.query, 
                    this.returnOutput.bind(this)
                );
        },
        returnOutput: function(err, values){
                if(err === null){
                        this.res.header("Access-Control-Allow-Origin", "*");
                        this.res.header("Access-Control-Allow-Headers", "X-Requested-With");
                        this.res.header('Content-Type', 'application/json');
                        
                        this.res.jsonp(values);
                } else {
                        this.res.send(err);
                }
                this.callback();
        }
};

var request = function(req,res,callback){        
        
        //selects the function name
        var fName = 'rest'+req.method;
        //runs the correct function
        var myRest = new Rest(req,res,callback);
        
        myRest[fName]();
};

module.exports.request = request;