const { UserModel } = require("../../Models/User.model");
const bcrypt = require("bcrypt");

const DeleteUser = async (req, res) => {
  const { id, password } = req.body;
  let findbyId = await UserModel.findById(id);
  if (findbyId) {
    let PasswordCheck = await bcrypt.compare(password, findbyId.password);
    if (PasswordCheck) {
      try {
        await UserModel.findByIdAndDelete(id);
        res.send({ message: "User Deleted Successfully" });
      } catch (error) {
        res.send({ message: "Password Doesn't match" });
      }
    } else {
      res.send({ message: "Password Doesn't match." });
    }
  } else {
    res.send({ message: "User Doesn't exist" });
  }
};

module.exports = { DeleteUser };
