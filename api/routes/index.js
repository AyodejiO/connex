var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('OK');
});

router.get('/time', function(req, res, next) {
  const now = new Date();
  res.status(200).json({
    epoch: now.getTime(),
  });
});

module.exports = router;
