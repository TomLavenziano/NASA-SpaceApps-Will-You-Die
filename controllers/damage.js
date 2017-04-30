var Promise = require('promise');
var fetch = require('node-fetch');

const S_SOURCE = `https://www.broadbandmap.gov/broadbandmap/demographic/2014/coordinates?latitude=42.456&longitude=-74.987&format=json`;
const E_SOURCE = "http://google.com";
const P_SOURCE = "http://google.com";

const getResults = json => json.results.map(r => {
  const newResult = Object.assign({}, r, {source: SOURCE});
  if(newResult.hasOwnProperty('json')) {
    newResult.json = JSON.parse(newResult.json);
  }
  return newResult;
});

const getStructDamage = ( x, y ) => {
  var src = S_SOURCE;
  return fetch(src)
     .then(res => {
       return res.json();
     });
}

const getEcoDamage = ( x, y ) => {
  var src = S_SOURCE;
  return fetch(src)
     .then(res => {
       return res.json();
     });
}

const getPopDamage = ( x, y ) => {
  var src = S_SOURCE;
  return fetch(src)
     .then(res => {
       return res.json();
     });
}


exports.getStructural = getStructDamage;
exports.getEco = getEcoDamage;
exports.getPopulation = getPopDamage;
