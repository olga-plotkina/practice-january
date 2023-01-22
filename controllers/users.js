const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const Users = require("../models/users");
const { SECRET_KEY } = process.env;

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const candidate = await Users.findOne({ email });
  if (candidate) {
    return res.status(400).json({ message: "email exists" });
  }

  const hashPassword = bcrypt.hashSync(password, 10);

  const newUser = await Users.create({ name, email, password: hashPassword });

  res.status(201).json({ user: newUser });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const candidate = await Users.findOne({ email });
  if (!candidate) {
    return res.status(400).json({ message: "email or password is wrong" });
  }

  const comparePassword = bcrypt.compareSync(password, candidate.password);

  if (!comparePassword) {
    res.status(400).json({ message: "email or password is wrong" });
  }

  const token = jwt.sign({ id: candidate._id }, SECRET_KEY);

  res.json({ user: candidate, token });
};

const logoutUser = async (req, res) => {
  await Users.findByIdAndUpdate(req.user._id, {token: null});
  res.status(204).json();
};

const refreshUser = async (req, res) => {
  res.send(req.user);
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser,
};
