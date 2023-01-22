const jwt = require("jsonwebtoken");

const User = require("../models/users");

require("dotenv").config();
const {SECRET_KEY} = process.env;

const auth = async (req, res, next) => {
const {authorization = ""} = req.headers;
const [bearer, token] = authorization.split(" ");
if (!token || bearer !== "Bearer"){
    return res.status(401).json({message: "not authorized"});
} 
try {
    const {id} = jwt.verify(token, SECRET_KEY);
const candidate = await User.findById(id);
if (!candidate){
    return res.status(401).json({message: "not authorized"});
}
req.user = candidate;
next();
}
catch {
    return res.status(401).json({message: "not authorized"});
}
}

module.exports = auth;