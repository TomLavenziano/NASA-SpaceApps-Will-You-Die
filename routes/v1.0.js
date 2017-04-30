var express = require('express');
var router = express.Router();

var damage = require('../controllers/damage');
var geoloc = require('../controllers/geoloc');

const NEUTRAL_DAMAGE = 0;

/* GET All damage listing. */
router.get('/', (req, res, next) => {
  var path = req.params.pathArray || [];

  var structDamage = damage.getStructural(path);

  var ecoDamage = damage.getEco(path);

  var popDamage = damage.getPopulation(path);


  var totalDamageIndex = calcTotalDamageIndex(structDamageIndex, ecoDamageIndex, popDamageIndex) || 'Test'; // Dev route testing

  res.send(totalDamageIndex);
});

router.get('/conv', ( req, res, next ) => {
  var xCoord = req.param.x;
  var yCoord = req.param.y;
  geoloc.convertToLL(xCoord, yCoord);
});

module.exports = router;
