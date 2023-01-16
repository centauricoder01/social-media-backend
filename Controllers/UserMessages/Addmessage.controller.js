const { MessageModel } = require("../../Models/Messages.model");

const AddMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;

  const message = new MessageModel({
    chatId,
    senderId,
    text,
  });
  try {
    const storeResult = await message.save();
    res.send({ message: "Message Stored", data: storeResult });
  } catch (error) {
    res.send({ message: "Server Error", error: error });
  }
};

module.exports = { AddMessage };
