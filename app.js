var express = require('express');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', indexController.index);

var server = app.listen(8526, function() {
	console.log('Express server listening on port ' + server.address().port);
});
