var express = require("express")
var app = express();
// Middleware
var morgan = require('morgan');
var parser = require('body-parser');
var cors = require('cors');

var handler = require('./request_handler.js')

// Logging and parsing data
app.use(morgan('dev'));
app.use(parser.json());// parses json data

// Allows cross origin requests
app.use(cors());

var port = process.env.PORT || 1337;

app.listen(port, function() {
  console.log("you are now listening to something very", port)
})

app.get('/db', function(req, res) {
  handler.get(req, res);
});

app.post('/db', function(req, res) {
  handler.post(req, res);
});

app.put('/db', function(req, res) {
  handler.put(req, res);
});

app.delete('/db', function(req, res) {
  handler.delete(req, res);
});


app.get('/', function(req, res) {
  res.status(200).send({message: 'CELEBRATE FOR THE SERVER IS FUNCTIONING'})
});