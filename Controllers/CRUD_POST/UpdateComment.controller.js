const { PostModel } = require("../../Models/Post.model");

const UpdateComment = async (req, res) => {
  let postid = req.params.id;
  let { comment, id } = req.body;
  try {
    const Post = await PostModel.findById(postid);
    let postdata = Post.comment.map((ele) => {
      if (ele._id === id) {
        console.log(ele);
        return { ...ele, comment };
      }
      return ele;
    });
    // await PostModel.save();
    // console.log(Post);

    // console.log(postdata);
    res.send({ message: "Comment Updated" });
  } catch (error) {
    res.send({ message: error });
  }
};

module.exports = { UpdateComment };
