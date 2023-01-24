const express = require("express");
const { Allpost } = require("../Controllers/CRUD_POST/Allpost.controller");
const { CommentPost } = require("../Controllers/CRUD_POST/Comment.controller");
const {
  DeletePost,
} = require("../Controllers/CRUD_POST/Deletepost.controller");
const { GetPosts } = require("../Controllers/CRUD_POST/Getposts.controller");
const PostRoutes = express.Router();
const { CreatePost } = require("../Controllers/CRUD_POST/Post.Controllers");
const { UpdatePost } = require("../Controllers/CRUD_POST/Update.controller");
const {
  UpdateComment,
} = require("../Controllers/CRUD_POST/UpdateComment.controller");
const {
  PostLike,
} = require("../Controllers/Like&Dislike/Like&Dislike.controller");

PostRoutes.post("/", CreatePost);
PostRoutes.get("/allpost", Allpost);
PostRoutes.get("/:id", GetPosts);
PostRoutes.put("/:id", UpdatePost);
PostRoutes.delete("/:id", DeletePost);
PostRoutes.put("/:id/like", PostLike);
PostRoutes.put("/:id/comment", CommentPost);
PostRoutes.put("/:id/updatecomment", UpdateComment);

module.exports = { PostRoutes };
