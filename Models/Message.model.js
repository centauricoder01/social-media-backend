const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    chatId: { type: String },
    senderId: { type: String },
    Text: { type: String },
  },
  {
    versionKey: false,
  }
);

const MessageModel = mongoose.model("Message", MessageSchema);

module.exports = MessageModel;
