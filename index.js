var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/home', function(request, response) {
  //response.send('Hello World!')
  response.sendfile(__dirname + '/public/home/home.html');
})



app.get('/', function(request, response) {
  //response.send('Hello World!')
  res.sendfile(__dirname + '/public/index.html');
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
