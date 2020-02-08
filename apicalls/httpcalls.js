var exports = module.exports = {};
// const https = require('https');
// const request = require('request');
const axios = require('axios');
const keys = require('../keys');
const responseData = require('../resources/respondParseData');

exports.bitcoinHttpCall = () => {
  let URI = "https://api.nomics.com/v1/currencies/ticker?key="+keys.nomicskey+"&ids=BTC,ETH,XRP&interval=1d,30d&convert=USD";
  require('axios')
  .get(URI)
  .then(response => {
    //console.log(response.data);
    responseData.respondWithParsedDataList(response.data,"USD");
  })
  .catch(error => {
    console.log(error);
  });
}
