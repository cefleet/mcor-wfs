var pg = require('pg');

var GetFeature = function(connection, params, callback){
    lErr = [];
    if(lErr.length == 0){
        var client = new pg.Client(connection);
        client.connect();        
        var fields = '*';
        var geomField = 'the_geom';
        var features = new FeatureCollection();

        var sql ="SELECT "+
        "ST_AsGeoJSON(ST_Transform("+geomField+",4326)) AS geoGeom, "+
        fields+" FROM "+
        params.typeName
        +" WHERE "+
        "St_Intersects(ST_MakeEnvelope("+params.bbox+", 4326), "+
        "ST_Transform(the_geom,4326))";
        
        console.log(sql);  
        var query = client.query(sql);
                          
        query.on('error', function(err){
            lErr.push(err);
        });
          
        query.on('row', function(row){
            
            if(row.geogeom){
                features.features.push({
                    "type": "Feature",
                    "geometry":JSON.parse(row.geogeom),
                    "properties":row
                });    
            }
        });
          
        query.on("end", function(){
            if(lErr.length == 0){
                callback(null, features);
            } else {
                callback(lErr,null);        
            }
                client.end();                          
        });
    } else {
        callback(lErr,null);
    }
};

function FeatureCollection(){
    this.type = 'FeatureCollection';
    this.features = new Array();
}

module.exports = GetFeature;