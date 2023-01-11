const { PostModel } = require("../../Models/Post.model");

const GetPosts = async (req, res) => {
  const { id } = req.params;
  try {
    const userpost = await PostModel.findById(id);
    res.status(200).json(userpost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { GetPosts };
