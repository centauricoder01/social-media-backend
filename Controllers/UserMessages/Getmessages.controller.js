const { MessageModel } = require("../../Models/Messages.model");

const GetMessage = async (req, res) => {
  const { ChatId } = req.params;

  try {
    const GetChats = await MessageModel.find({ ChatId });
    res.send({ message: "Chat Found", chat: GetChats });
  } catch (error) {
    res.send({ message: "Server Error", error: error });
  }
};

module.exports = { GetMessage };
