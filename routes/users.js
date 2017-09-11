var express = require('express');
var rand = require("random-key");
var router = express.Router();

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
module.exports = router;
