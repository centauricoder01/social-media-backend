const { ChatModel } = require("../../Models/Chats.model");

const FindChats = async (req, res) => {
  try {
    const chat = await ChatModel.findOne({
      member: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.send({ message: "User Chats Found", chat: chat });
  } catch (error) {
    res.send({ message: "Server Error", error: error });
  }
};

module.exports = { FindChats };
