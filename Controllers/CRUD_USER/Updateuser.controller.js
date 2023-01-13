const { UserModel } = require("../../Models/User.model");
const bcrypt = require("bcrypt");

const Updateuser = async (req, res) => {
  let { id } = req.params;
  let { userid, admin, password } = req.body;

  try {
    if (id === userid || userAdminstatus) {
      if (password) {
        let salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
      const update = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(update);
    } else {
      res.status(403).json("You are not Authorised");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { Updateuser };
