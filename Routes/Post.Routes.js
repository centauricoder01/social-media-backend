const express = require("express");
const { PostModel } = require("../Models/Post.model");

const { Allpost } = require("../Controllers/CRUD_POST/Allpost.controller");
const {
  DeletePost,
} = require("../Controllers/CRUD_POST/Deletepost.controller");
const { GetPosts } = require("../Controllers/CRUD_POST/Getposts.controller");
const PostRoutes = express.Router();
const { UpdatePost } = require("../Controllers/CRUD_POST/Update.controller");
const {
  PostLike,
} = require("../Controllers/Like&Dislike/Like&Dislike.controller");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// ***************************************************************************

PostRoutes.post("/", upload.single("image"), async (req, res) => {
  const newPost = new PostModel(req.body);

  try {
    await newPost.save();
    return res.json(req.body);
  } catch (error) {
    res.send({ raj: error.message });
  }
});
PostRoutes.get("/allpost", Allpost);
PostRoutes.get("/:id", GetPosts);
PostRoutes.put("/:id", UpdatePost);
PostRoutes.delete("/:id", DeletePost);
PostRoutes.put("/:id/like", PostLike);

module.exports = { PostRoutes };
