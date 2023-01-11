const mongoose = require("mongoose");

const reqString = { type: String, required: true };
const reqBool = { type: Boolean, default: false };

const UserSchema = mongoose.Schema(
  {
    username: reqString,
    password: { type: String, required: true, minLength: 5, maxLength: 10 },
    name: { type: String, required: true, minLength: 4, maxLength: 30 },
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
