const express = require("express");
const {
  AddMessage,
} = require("../Controllers/UserMessages/Addmessage.controller");
const {
  GetMessage,
} = require("../Controllers/UserMessages/Getmessages.controller");

const MessageRouter = express.Router();

MessageRouter.post("/", AddMessage);
MessageRouter.get("/:chatId", GetMessage);

module.exports = { MessageRouter };
