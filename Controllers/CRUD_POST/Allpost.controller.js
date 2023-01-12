const { PostModel } = require("../../Models/Post.model");

const Allpost = async (req, res) => {
  try {
    let postData = await PostModel.find();
    res.send({ post: postData, message: "All Post are Here" });
  } catch (error) {
    res.send({ message: "Server Error" });
  }
};

module.exports = { Allpost };
