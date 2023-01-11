const express = require("express");
const {
  DeletePost,
} = require("../Controllers/CRUD_POST/Deletepost.controller");
const { GetPosts } = require("../Controllers/CRUD_POST/Getposts.controller");
const PostRoutes = express.Router();
const { CreatePost } = require("../Controllers/CRUD_POST/Post.Controllers");
const { UpdatePost } = require("../Controllers/CRUD_POST/Update.controller");
const {
  PostLike,
} = require("../Controllers/Like&Dislike/Like&Dislike.controller");
// const { Timeline } = require("../Controllers/TimeLine/TImeline.controller");

PostRoutes.post("/", CreatePost);
PostRoutes.get("/:id", GetPosts);
PostRoutes.put("/:id", UpdatePost);
PostRoutes.delete("/:id", DeletePost);
PostRoutes.put("/:id/like", PostLike);
// PostRoutes.get("/:id/timeline", Timeline);

module.exports = { PostRoutes };
