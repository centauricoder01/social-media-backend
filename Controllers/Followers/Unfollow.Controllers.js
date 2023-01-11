const { UserModel } = require("../../Models/User.model");

const UnFollowUser = async (req, res) => {
  const id = req.params.id;
  const { currentuserid } = req.body;

  if (currentuserid === id) {
    res.status(403).json("Action Forbidden");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentuserid);

      if (followUser.followers.includes(currentuserid)) {
        await followUser.updateOne({ $pull: { followers: currentuserid } });
        await followingUser.updateOne({ $pull: { following: id } });
        res.status(200).json("User UnFollowed");
      } else {
        res.status(403).json("User is not followed by you");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
module.exports = { UnFollowUser };
