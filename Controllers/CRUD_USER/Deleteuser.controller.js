const { UserModel } = require("../../Models/User.model");
const bcrypt = require("bcrypt");

const DeleteUser = async (req, res) => {
  const { id, password } = req.body;
  let findbyId = UserModel.findById(id);
  if (id) {
    let PasswordCheck = await bcrypt.compare(password, findbyId.password);
    if (PasswordCheck) {
      try {
        await UserModel.findByIdAndDelete(id);
        res.status(200).json("User Deleted Successfully");
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } else {
      res.send({ message: "Password Doesn't match." });
    }
  } else {
    res.send({ message: "User Doesn't exist" });
  }
};

module.exports = { DeleteUser };
