const express = require("express");
const { LoginUser } = require("../Controllers/AUTH/Signup.Controller");
const { RegisterUser } = require("../Controllers/AUTH/Login.Controller");

const AuthRouter = express.Router();

AuthRouter.post("/register", RegisterUser);
AuthRouter.post("/login", LoginUser);
module.exports = { AuthRouter };
