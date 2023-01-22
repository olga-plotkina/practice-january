const { Schema, model } = require("mongoose");

const contactsSchema = Schema({
  name: String,
  number: String,
});

const Contacts = model("contact", contactsSchema);

module.exports = Contacts;
