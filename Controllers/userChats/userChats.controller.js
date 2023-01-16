const { ChatModel } = require("../../Models/Chats.model");

const Userchats = async (req, res) => {
  try {
    const chat = await ChatModel.find({ member: { $in: [req.params.userId] } });
    res.send({ message: "User Chats Found", chats: chat });
  } catch (error) {
    res.send({ message: "Server Error", error: error });
  }
};

module.exports = { Userchats };
