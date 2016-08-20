var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = require('./router/searchRouter.js')


app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static('./client')) //serve static files 

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name');
  next();
});


app.use('/api/', router)

app.set('port', process.env.PORT || 3000);

console.log('dirname', __dirname);
app.listen(app.get('port'), function() {
	console.log('express-node server is now listening on port: ', app.get('port'))
})