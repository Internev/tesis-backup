// Created by Duncan on 12.29.2016
// This is just a temporary db for setup and testing
var mongoose = require('mongoose');

// Connection to database
mongoose.connect('mongodb://localhost:27017/shh');
mongoose.connection.on('error', function(error) {
  console.log('MONGODB CONNECTION ERROR ----> ', error);
});
mongoose.connection.on('open', function() {
  console.log('MONODB CONNECTED')
});

module.exports = mongoose;