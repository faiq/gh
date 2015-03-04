var request = require('request')
  , api = 'https://api.github.com'
  , headers = { 'User-Agent': 'Dash'}

  var opts = { 
    uri: api + '/users/faiq/subscriptions', 
    headers: headers, 
    json: true
  }
  request(opts, function (err, res, b){
    console.log(err, b)
  })
