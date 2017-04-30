const VIEWPORT_XY = [1500, 650];
const MAP_LATLONG = [60.817, 21.496];
const MAP_RATIO = [(MAP_LATLONG[0] / VIEWPORT_XY[0]), (MAP_LATLONG[1] / VIEWPORT_XY[1])];


const convertToLL = ( x, y ) => {
  console.log(MAP_RATIO);
}

const convertToXY = ( lat, long ) => {

}


exports.convertToXY = convertToXY();
exports.convertToLL = convertToLL();
