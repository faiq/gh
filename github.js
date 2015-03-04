var request = require('request')
  , es = require('event-stream')
  , JSONStream = require('jsonstream')
  , api = 'https://api.github.com'
  , headers = { 'User-Agent': 'Dash'}

  var opts = { 
    uri: api + '/users/faiq/subscriptions', 
    headers: headers, 
    json: true
  }
  request(opts)
  .pipe(JSONStream.parse('*'))
  .pipe(es.map(function (data, cb) { 
    console.log(data)
    cb(null, data)
  }))
  .pipe(process.stdout)
