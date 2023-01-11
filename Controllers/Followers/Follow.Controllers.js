const { UserModel } = require("../../Models/User.model");

const FollowUser = async (req, res) => {
  const id = req.params.id;
  const { currentuserid } = req.body;

  if (currentuserid === id) {
    res.status(403).json("Action Forbidden");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentuserid);

      if (followUser.followers.includes(currentuserid)) {
        res.status(403).json("U already followed this user");
      } else {
        await followUser.updateOne({ $push: { followers: currentuserid } });
        await followingUser.updateOne({ $push: { following: id } });
        res.status(200).json("User Followed");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
module.exports = { FollowUser };
