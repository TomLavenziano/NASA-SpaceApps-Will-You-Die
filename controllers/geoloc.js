const VIEWPORT_XY = [1500, 650];
const MAP_LATLONG = [60.817, 21.496];
const MAP_RATIO_LAT = (MAP_LATLONG[0] / VIEWPORT_XY[0]);
const MAP_RATIO_LONG = (MAP_LATLONG[1] / VIEWPORT_XY[1]);


function convertXToLat(x) {
  console.log(x * MAP_RATIO_LAT);
  return (x * MAP_RATIO_LAT);
}
function convertYToLong(y) {
  console.log(y * MAP_RATIO_LONG);
  return (y * MAP_RATIO_LONG);
}

const convertLToXY = ( lat, long ) => {

}


exports.convertXToLat = convertXToLat();
exports.convertYToLong = convertYToLong();
// exports.convertToXY = convertToXY();
