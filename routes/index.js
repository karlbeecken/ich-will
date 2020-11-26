var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ich will...' });
});

router.get('/:name', function(req, res, next) {
  res.render('name', { name: req.params.name, wish: "Brot" });
});

router.post('/:name', function(req, res, next) {
  next('/');
});

module.exports = router;
