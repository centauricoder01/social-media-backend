const express = require("express");
const { AllUser } = require("../Controllers/CRUD_USER/AllUser.controller");
const {
  DeleteUser,
} = require("../Controllers/CRUD_USER/Deleteuser.controller");
const { GetUser } = require("../Controllers/CRUD_USER/Getuser.Controller");
const {
  SearchUser,
} = require("../Controllers/CRUD_USER/SearchUser.controller");
const {
  UpdatePassword,
} = require("../Controllers/CRUD_USER/UpdatePassword.controller");
const {
  Updateuser,
} = require("../Controllers/CRUD_USER/Updateuser.controller");
const { FollowUser } = require("../Controllers/Followers/Follow.Controllers");
const {
  UnFollowUser,
} = require("../Controllers/Followers/Unfollow.Controllers");
const UserRoute = express.Router();

UserRoute.get("/alluser", AllUser);
UserRoute.get("/search", SearchUser);
UserRoute.get("/:id", GetUser);
UserRoute.put("/:id", Updateuser);
UserRoute.delete("/:id", DeleteUser);
UserRoute.put("/", UpdatePassword);
UserRoute.put("/:id/follow", FollowUser);
UserRoute.put("/:id/unfollow", UnFollowUser);

module.exports = { UserRoute };
