const { UserModel } = require("../../Models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const RegisterUser = async (req, res) => {
  const { email } = req.body;
  let getbyemail = await UserModel.findOne({ email });
  if (getbyemail) {
    return res.send({ message: "User already exist" });
  }
  // ************************************************

  const salt = await bcrypt.genSalt(10);
  const HashedPass = await bcrypt.hash(req.body.password, salt);
  req.body.password = HashedPass;
  const newUser = new UserModel(req.body);

  try {
    let ReturnedUser = await newUser.save();
    let token = jwt.sign(
      {
        username: ReturnedUser.username,
        id: ReturnedUser._id,
      },
      process.env.JWT_KEY
    );
    res.send({ user: ReturnedUser, token: token, message: "Successful" });
  } catch (error) {
    res.send({ message: "server error" });
  }
};

module.exports = { RegisterUser };
