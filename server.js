var express    = require('express');
var bodyParser = require('body-parser');
//var logger     = require('morgan');

var app = express();
app.use(bodyParser.json());
/* 
原案例是
app.use('/api/posts', require('.conrollers/api/posts'));
app.use('/', require('./controllers/static'));

无下面
app.use(require('./controllers'));

应该是无额外两个index.js文件

*/



app.use(require('./controllers'));


var server = app.listen(3000, function () {
  console.log('server listening on %d', server.address().port);
});
