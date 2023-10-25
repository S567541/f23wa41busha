var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    log=Math.log(random)
  res.send(`Log function is appilied ${random} is ${log}`);
});

module.exports = router;
var random=Math.random();
var log;