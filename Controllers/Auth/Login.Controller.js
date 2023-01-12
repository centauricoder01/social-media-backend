const { UserModel } = require("../../Models/User.model");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let findUser = await UserModel.findOne({ email });
    if (findUser) {
      let PasswordCheck = await bcrypt.compare(password, findUser.password);
      if (!PasswordCheck) {
        return res.send({ message: "Wrong Password" });
      } else {
        let token = jwt.sign(
          {
            username: findUser.username,
            id: findUser._id,
          },
          process.env.JWT_KEY
        );
        console.log(token);
        res.send({
          user: findUser,
          token: token,
          message: "User Login Successful",
        });
      }
    } else {
      res.send({ message: "User doesn't Exist" });
    }
  } catch (error) {
    res.send({ message: error });
  }
};

module.exports = { LoginUser };
