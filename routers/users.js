const routers = require("express").Router();

const {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser,
} = require("../controllers/users");

const auth = require("../middlewares/auth");

routers.post("/signup", registerUser);

routers.post("/login", loginUser);

routers.post("/logout", auth, logoutUser);

routers.get("/current", auth, refreshUser);

module.exports = routers;
