const express = require("express");
const {
  CreateChat,
} = require("../Controllers/userChats/CreateChat.controllers");
const { FindChats } = require("../Controllers/userChats/findChat.controller");
const { Userchats } = require("../Controllers/userChats/userChats.controller");

const ChatRoute = express.Router();

ChatRoute.post("/", CreateChat);
ChatRoute.get("/:userId", Userchats);
ChatRoute.get("/find/:firstId/:secondId", FindChats);

module.exports = { ChatRoute };
