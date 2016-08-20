var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = require('./router/')


app.use(cors());
app.use(bodyParser());
app.use(express.static('./client')) //serve static files 


app.set('port', process.env.PORT || 3000);

console.log('dirname', __dirname);
app.listen(app.get('port'), function() {
	console.log('express-node server is now listening on port: ', app.get('port'))
})