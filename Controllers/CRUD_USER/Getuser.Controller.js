const { UserModel } = require("../../Models/User.model");

const GetUser = async (req, res) => {
  let { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("User Doesn't exist");
    }
  } catch (error) {
    res.status(500).join({ message: error.message });
  }
};

module.exports = { GetUser };
