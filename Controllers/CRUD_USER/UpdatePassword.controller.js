const { UserModel } = require("../../Models/User.model");
const bcrypt = require("bcrypt");

const UpdatePassword = async (req, res) => {
  const { id, oldpassword, newpassword } = req.body;
  let findbyId = await UserModel.findById(id);
  if (findbyId) {
    let PasswordCheck = await bcrypt.compare(oldpassword, findbyId.password);
    if (PasswordCheck) {
      try {
        let salt = await bcrypt.genSalt(10);
        req.body.newpassword = await bcrypt.hash(newpassword, salt);
        console.log(req.body.newpassword);
        await UserModel.findByIdAndUpdate(
          id,
          { password: req.body.newpassword },
          {
            new: true,
          }
        );
        res.send({ message: "Password Changed" });
      } catch (error) {
        res.send({ message: error });
      }
    } else {
      res.send({ message: "Password Doesn't match." });
    }
  } else {
    res.send({ message: "User Dosesn't exist" });
  }
};
module.exports = { UpdatePassword };
