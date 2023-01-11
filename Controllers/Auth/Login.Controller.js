const { UserModel } = require("../../Models/User.model");
const bcrypt = require("bcrypt");

const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let findUser = await UserModel.findOne({ email });
    if (findUser) {
      let PasswordCheck = await bcrypt.compare(password, findUser.password);
      PasswordCheck
        ? res.status(200).json(findUser)
        : res.status(400).json("Password doesn't match");
    } else {
      res.status(404).json("User doesn't Exist....");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { LoginUser };
