const { ChatModel } = require("../../Models/Chat.model");

const CreateChat = async (req, res) => {
  const newChat = new ChatModel({
    member: [req.body.senId, req.body.recId],
  });

  try {
    const SaveChat = await newChat.save();
    res.send({ message: "Chat Saved", data: SaveChat });
  } catch (error) {
    res.senId({ message: "Server Error" });
  }
};

module.exports = { CreateChat };
