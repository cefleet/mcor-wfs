var fakeData = 
{ 
    "type": "FeatureCollection",
    "features": [
        {
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    96.15686,
                    150.51648
                ],
                [
                    104.93843,
                    20.59615
                ]
            ]
        },
        "properties": {
            "gid": "b61fdbb8-2267-4997-a10a-6d5dd60d152e",
            "name": "Gilmore",
            "checked": false
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    97.40946,
                    93.02018
                ],
                [
                    50.59973,
                    75.72185
                ]
            ]
        },
        "properties": {
            "gid": "c13fecd1-d90b-4eaf-b96f-0259a4b2bd1a",
            "name": "Clayton",
            "checked": false
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    71.35017,
                    103.72517
                ],
                [
                    161.20527,
                    128.39702
                ]
            ]
        },
        "properties": {
            "gid": "a24b6b6b-6fd0-4caa-bf72-26a4691a7cb2",
            "name": "Mcintosh",
            "checked": false
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    143.03100,
                    125.46369
                ],
                [
                    78.95534,
                    174.64573
                ]
            ]
        },
        "properties": {
            "gid": "f74bda94-ca77-402a-bce6-a37c3b928b14",
            "name": "Jordan",
            "checked": false
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    109.89552,
                    153.51925
                ],
                [
                    123.52085,
                    159.52714
                ]
            ]
        },
        "properties": {
            "gid": "335742b8-8af5-4d05-93fa-aebf3082274c",
            "name": "Carson",
            "checked": true
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    90.62214,
                    79.37925
                ],
                [
                    116.04173,
                    141.51844
                ]
            ]
        },
        "properties": {
            "gid": "18054ac8-fe51-4a89-8d4c-dd0ae90f76f5",
            "name": "Love",
            "checked": true
        }
    }
]
};

var pg = require('pg');

var GetFeature = function(connection, params, callback){
    callback(null, fakeData);
};

module.exports = GetFeature;