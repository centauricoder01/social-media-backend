const { ChatModel } = require("../../Models/Chats.model");

const CreateChat = async (req, res) => {
  const newChat = new ChatModel({
    member: [req.body.senderId, req.body.receiverId],
  });

  try {
    const saveChat = await newChat.save();
    res.send({ message: "Chat Saved", chat: saveChat });
  } catch (error) {
    res.send({ message: "Server Error", error: error.message });
  }
};

module.exports = { CreateChat };
