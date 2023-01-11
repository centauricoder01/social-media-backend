const { UserModel } = require("../../Models/User.model");
const bcrypt = require("bcrypt");

const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let findUser = await UserModel.findOne({ email });
    if (findUser) {
      let PasswordCheck = await bcrypt.compare(password, findUser.password);
      PasswordCheck
        ? res.send({ user: findUser, message: "login Successful" })
        : res.send({ message: "Password doesn't match" });
    } else {
      res.send({ message: "User doesn't Exist" });
    }
  } catch (error) {
    res.send({ message: "server Error" });
  }
};

module.exports = { LoginUser };
