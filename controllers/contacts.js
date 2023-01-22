const Contacts = require("../models/contacts");

const getContacts = async (req, res) => {
  const data = await Contacts.find();
  res.send(data);
};

const addContact = async (req, res) => {
  const { name, number} = req.body;
  const data = await Contacts.create({ name, number});
  res.status(201).json(data);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const data = await Contacts.findByIdAndDelete(id);
  res.send(data);
};

module.exports = { getContacts, addContact, deleteContact };
