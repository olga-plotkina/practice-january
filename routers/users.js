const routers = require("express").Router();

const {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser,
} = require("../controllers/users");

routers.post("/signup", registerUser);

routers.post("/login", loginUser);

routers.post("/logout", logoutUser);

routers.get("/current", refreshUser);

module.exports = routers;
