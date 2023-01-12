const express = require("express");
const { AllUser } = require("../Controllers/CRUD_USER/AllUser.controller");
const {
  DeleteUser,
} = require("../Controllers/CRUD_USER/Deleteuser.controller");
const { GetUser } = require("../Controllers/CRUD_USER/Getuser.Controller");
const {
  Updateuser,
} = require("../Controllers/CRUD_USER/Updateuser.controller");
const { FollowUser } = require("../Controllers/Followers/Follow.Controllers");
const {
  UnFollowUser,
} = require("../Controllers/Followers/Unfollow.Controllers");
const UserRoute = express.Router();

UserRoute.get("/alluser", AllUser);
UserRoute.get("/:id", GetUser);
UserRoute.put("/:id", Updateuser);
UserRoute.delete("/:id", DeleteUser);
UserRoute.put("/:id/follow", FollowUser);
UserRoute.put("/:id/unfollow", UnFollowUser);

module.exports = { UserRoute };
