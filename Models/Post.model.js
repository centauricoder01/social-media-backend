const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    desc: { type: String },
    likes: [],
    comment: [
      {
        name: { type: String, required: true },
        comment: { type: String, required: true },
        id: { type: String, required: true },
        image: { type: String, required: true },
      },
    ],
    image: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const PostModel = mongoose.model("UserPosts", PostSchema);

module.exports = { PostModel };
