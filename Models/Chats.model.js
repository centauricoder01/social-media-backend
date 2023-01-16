const { default: mongoose } = require("mongoose");

const ChatSchema = mongoose.Schema(
  {
    member: {
      type: Array,
    },
  },
  { versionKey: false }
);

const ChatModel = mongoose.model("Chat", ChatSchema);

module.exports = { ChatModel };
