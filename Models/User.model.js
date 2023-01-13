const mongoose = require("mongoose");

const reqString = { type: String, required: true };
const reqBool = { type: Boolean, default: false };

const UserSchema = mongoose.Schema(
  {
    username: reqString,
    password: { type: String, required: true, minLength: 5 },
    name: { type: String, required: true, minLength: 4, maxLength: 30 },
    isAdmin: reqBool,
    email: reqString,
    gender: reqString,
    profilePicture: {
      type: String,
      default:
        "https://res.cloudinary.com/diverse/image/upload/v1673594309/diverse/ovtauheobmhzfir4wlnw.jpg",
    },
    coverPicture: {
      type: String,
      default:
        "https://res.cloudinary.com/diverse/image/upload/v1673590089/diverse/hdcaktula0nyoirvktn2.jpg",
    },
    about: { type: String, default: "" },
    livesin: { type: String, default: "" },
    workAt: { type: String, default: "" },
    relationship: { type: String, default: "" },
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
