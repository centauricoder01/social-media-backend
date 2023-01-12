const express = require("express");
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

PostRoutes.post("/", upload.single("image"), (req, res) => {
  // const newPost = new PostModel(req.body);

  try {
    // await newPost.save();
    return res.status(200).json(req);
  } catch (error) {
    res.send({ message: error.message });
  }
});
PostRoutes.get("/allpost", Allpost);
PostRoutes.get("/:id", GetPosts);
PostRoutes.put("/:id", UpdatePost);
PostRoutes.delete("/:id", DeletePost);
PostRoutes.put("/:id/like", PostLike);

module.exports = { PostRoutes };
