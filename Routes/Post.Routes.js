const express = require("express");
const PostRoutes = express.Router();
const { Allpost } = require("../Controllers/CRUD_POST/Allpost.controller");
const { CommentPost } = require("../Controllers/CRUD_POST/Comment.controller");
const {
  DeletePost,
} = require("../Controllers/CRUD_POST/Deletepost.controller");
const { GetPosts } = require("../Controllers/CRUD_POST/Getposts.controller");
const { CreatePost } = require("../Controllers/CRUD_POST/Post.Controllers");
const { UpdatePost } = require("../Controllers/CRUD_POST/Update.controller");
const {
  PostLike,
} = require("../Controllers/LIKE&DISLIKE/Like&Dislike.controller");

PostRoutes.post("/", CreatePost);
PostRoutes.get("/allpost", Allpost);
PostRoutes.get("/:id", GetPosts);
PostRoutes.put("/:id", UpdatePost);
PostRoutes.delete("/:id", DeletePost);
PostRoutes.put("/:id/like", PostLike);
PostRoutes.put("/:id/comment", CommentPost);

module.exports = { PostRoutes };
