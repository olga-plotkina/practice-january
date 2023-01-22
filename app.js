const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const contactsRouters = require("./routers/contacts");
const usersRouters = require("./routers/users");

const { PORT, DB_HOST } = process.env;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/contacts", contactsRouters);
app.use("/users", usersRouters);

mongoose.set("strictQuery", false);

mongoose.connect(DB_HOST, () => console.log("db is connect"));
app.listen(PORT, () => console.log("server is running"));
