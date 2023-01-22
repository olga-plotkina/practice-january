const { Schema, model } = require("mongoose");

const usersSchema = Schema({
  name: String,
  email: String,
  password: String,
  token: String,
});

const Users = model("user", usersSchema);

module.exports = Users;
