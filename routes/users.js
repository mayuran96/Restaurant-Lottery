var express = require('express');
var rand = require("random-key");
var router = express.Router();
var bodyParser = require('body-parser');
const yelp = require('yelp-fusion')
var mysql = require('mysql');

// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'Cuisines'
// });

// connection.connect(function(err){
//     if(err){
//         console.log('Error connecting to Db');
//         return;
//     }
//     console.log('Connection established');
// });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/start',function(req, res, next)
{
    res.send(JSON.stringify({key : rand.generate(5)}));
});

router.post('/acceptKey',function(req, res, next)
{
    console.log("Data posted");
});

router.post('/search',function (req, res){
    var obj = JSON.stringify(req.body);
    var cuisines = JSON.parse(obj);
    console.log(cuisines);
    var food = cuisines["cuisineOne"] + " food";
    connection.query("INSERT INTO restaurants (cuisineOne) VALUES ('Bombay Palace');", function (err, rows, fields) {
        if (err) throw err;
    });


    console.log(food);//this object is the return value of JSON data
    const clientId = 'JT_RwwuUVgPxnnkKcR3D7w';
    const clientSecret = 'H8nWwtyDb3bGiAVcqHLGz0Ux0wGXgqi30vEmW99pi3MXohdQEqwtR5ATYSijS2ZT';

    const searchRequest = {
        term: food,
        location: 'san francisco, ca'
    };

    yelp.accessToken(clientId, clientSecret).then(response => {
        const client = yelp.client(response.jsonBody.access_token);

        client.search(searchRequest).then(response => {
            const firstResult = response.jsonBody.businesses[0];
            const prettyJson = JSON.stringify(firstResult, null, 4);
            console.log(prettyJson);
            res.send(firstResult);
        });
    }).catch(e => {
        console.log(e);

    });

});


module.exports = router;
