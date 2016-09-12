var express = require('express');

var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

const hostname = '0.0.0.0';
const port = 3000;

app.get('/', function (request, response) {
  var path = request.path;
  response.render('store', {path: path});
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
