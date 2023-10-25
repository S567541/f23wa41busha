var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    random=Math.random();
    log=Math.log(random)
  res.send(`Log function is appilied ${random} is ${log}`);
});

module.exports = router;
var random=0;
var log;