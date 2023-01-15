const express = require("express");
const { RegisterUser } = require("../Controllers/Auth/Signup.Controller");
const { LoginUser } = require("../Controllers/Auth/Login.Controller");

const AuthRouter = express.Router();
AuthRouter.post("/register", RegisterUser);
AuthRouter.post("/login", LoginUser);
module.exports = { AuthRouter };
