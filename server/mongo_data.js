var db = require('./db_config.js');
var findOneOrCreate = require('mongoose-find-one-or-create');

// User Schema
const UsersSchema = new db.Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  projects: {
    type: Array,
    required: false
  },
});

UsersSchema.plugin(findOneOrCreate);

const Users = db.model('Users', UsersSchema);

module.exports = Users;