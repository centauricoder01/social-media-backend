const express = require("express");
const { LoginUser } = require("../Controllers/Auth/Login.Controller");
const { RegisterUser } = require("../Controllers/Auth/Signup.Controller");

const AuthRouter = express.Router();

AuthRouter.post("/register", RegisterUser);
AuthRouter.post("/login", LoginUser);
module.exports = { AuthRouter };
