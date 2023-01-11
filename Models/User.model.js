const mongoose = require("mongoose");

const reqString = { type: String, required: true };
const reqBool = { type: Boolean, default: false };

const UserSchema = mongoose.Schema(
  {
    username: reqString,
    password: reqString,
    name: reqString,
    isAdmin: reqBool,
    email: reqString,
    profilePicture: String,
    coverPicture: String,
    about: String,
    livesin: String,
    workAt: String,
    relationship: String,
    followers: [],
    following: [],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = mongoose.model("Users", UserSchema);

module.exports = { UserModel };
