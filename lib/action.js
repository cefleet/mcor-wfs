var fs = require('fs');
//var adapter = config.db.adapter;
//var conInfo = config.db.connection_info;

var adapter = 'pg';
var conInfo = 'https://localhost';

var action = function(query, callback){
    
        //These are required for any service
        var required = ['service','request','version'];
        var missingArr = [];
        
        //maps through the query and determines if there is anything missing
        var rValues = required.map(function(d){
            if(typeof query[d] === 'undefined'){
                missingArr.push(d);
            } else {
                return query[d];
            }
        });
        
        if( missingArr.length > 0){
            
            console.log('Something Missing');
            callback({"missig":missingArr}, null);
                
        } else {
            
            var action = query.request;
            console.log(__dirname);
            fs.exists(__dirname+'/adapters/'+adapter+'/'+action+'.js', function(exists){
                if(exists){
                    
                        var thisAction = require('./adapters/'+adapter+'/'+action);
                        
                        var returnAction = function(err, value){
                            callback(err,value);
                        }
                        
                        thisAction(conInfo, query, returnAction);        
                
                } else {
                        callback('Action Not Found: There is no action named "'+action+'" for the adapter "'+adapter+'"', null);        
                }
        })
        
        }
        

};

/*
var find_missing = function(required,obj){
    
    return missingArr;
};
*/

module.exports.action = action;