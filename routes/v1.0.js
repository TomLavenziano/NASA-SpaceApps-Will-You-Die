var express = require('express');
var router = express.Router();

var geoloc = require('../controllers/geoloc');
var damage = require('../controllers/damage');

const NEUTRAL_DAMAGE = 0;

/* GET All damage listing. */
router.post('/damage', (req, res, next) => {
  console.log("body: ");
  console.log(req.body);

  var pathXY = req.body.path || ['FailedReqs'];
  var path = ['InitialPath'];
  pathXY.forEach( ( elem, index, arr ) => {
    var x = elem[0];
    var y = elem[1];
    var lat = geoloc.convertXToLat(x);
    var long = geoloc.convertYToLong(y);

    var structDamage = damage.getStructural(lat, long);
    var ecoDamage = damage.getEco(lat, long);
    var popDamage = damage.getPopulation(lat, long);

    return path.push({
        'x': x,
        'y': y,
        'lat': lat,
        'long': long,
        'structDamage': structDamage || '000',
        'ecoDamage': ecoDamage || '000',
        'popDamage': popDamage || '000'
    });
  });

  // var lat = path[0] => geoloc.convertXToLat(x);
  // var long = path[1] => geoloc.convertYToLong(y);
  //
  // var structDamage = damage.getStructural(coord.x, coord.y);
  //
  // var ecoDamage = damage.getEco(coord.x, coord.y);
  //
  // var popDamage = damage.getPopulation(coord.x, coord.y);


  // var totalDamageIndex = calcTotalDamageIndex(structDamageIndex, ecoDamageIndex, popDamageIndex) || 'Test'; // Dev route testing

  // res.send(totalDamageIndex);
  res.send(path);
});

router.get('/conv', ( req, res, next ) => {
  var xCoord = req.param.x;
  var yCoord = req.param.y;
  geoloc.convertToLL(xCoord, yCoord);
});

module.exports = router;
