var Promise = require('bluebird');
var Users = require('./mongo_data.js');

var handler = {
  retrieve: function(params, cb) {
    Users.find({})
    .then(function(users) {
      cb(users);
    });
  },
  add: function(data, cb) {
    Users.findOneOrCreate({userName: data.userName}, data, function(data) {
      cb(data);
    });
  },
  update: function(data, cb) {
    Users.update(data)
    .then(function(data) {
      cb(data);
    });
  },
  remove: function(data, cb) {
    Users.remove(data)
    .then(function(data) {
      cb(data);
    });
  }
}
Promise.promisifyAll(handler);

module.exports = {
  get: function(req, res) {
    handler.retrieve(req.query, (userData) => {
      res.status(202)
      .json(userData)
      .end();
    });
  },
  post: function(req, res) {
    handler.add(req.body, (data) => {
      res.status(202)
      .end('User added successfully');
    });
  },
  put: function(req, res) {
    handler.update(req.body, function(data) {
      res.status(202)
      .end('User updated successfully');
    });
  },
  delete: function(req, res) {
    handler.remove(req.body, function(data) {
      res.status(202)
      .end('User deleted successfully');
    });
  }
}