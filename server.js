var express    = require('express');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());


app.use('/posts', require('./routes/posts'));
app.use('/', require('./routes/static'));





var server = app.listen(3000, function () {
  console.log('server listening on %d', server.address().port);
});
