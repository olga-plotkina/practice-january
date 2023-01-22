const routers = require("express").Router();

const {
  getContacts,
  addContact,
  deleteContact,
} = require("../controllers/contacts");

routers.get("/", getContacts);

routers.post("/", addContact);

routers.delete("/:id", deleteContact);

module.exports = routers;
