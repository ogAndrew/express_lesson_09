var express = require('express');
var router = express.Router();
var staticModels = require('../staticModels/planets');

router.get('/staticPlanets', function(req, res, next) {
  let planets = staticModels.planet;
  res.render('index', {
    planets
  });
});

module.exports = router;