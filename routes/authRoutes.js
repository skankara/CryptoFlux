const httpcalls = require('../apicalls/httpcalls');

module.exports = (app) => {
  app.get('/',(req,res)=>{
    httpcalls.bitcoinHttpCall();
    res.send({hi:'there'});
  });
}
