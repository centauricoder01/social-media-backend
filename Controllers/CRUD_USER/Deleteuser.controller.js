const { UserModel } = require("../../Models/User.model");

const DeleteUser = async (req, res) => {
  let { id } = req.params;
  let { userid, userAdminstatus } = req.body;
  try {
    if (id === userid || userAdminstatus) {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json("User Deleted Successfully");
    } else {
      res.status(403).json("You are not Authorised");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { DeleteUser };
