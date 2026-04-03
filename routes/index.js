var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '운영팀 웹 어드민 시스템' });
});

module.exports = router;
