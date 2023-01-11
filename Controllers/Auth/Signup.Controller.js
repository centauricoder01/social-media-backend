const { UserModel } = require("../../Models/User.model");
const bcrypt = require("bcrypt");

const RegisterUser = async (req, res) => {
  const { username, password, name, email } = req.body;
  let getbyemail = await UserModel.findOne({ email });
  if (getbyemail) {
    return res.send({ message: "User already exist" });
  }
  const salt = await bcrypt.genSalt(10);
  const HashedPass = await bcrypt.hash(password, salt);
  const newUser = new UserModel({
    username,
    password: HashedPass,
    name,
    email,
  });

  try {
    await newUser.save();
    res.send({ user: newUser, message: "Successful" });
  } catch (error) {
    res.send({ message: "server error" });
  }
};

module.exports = { RegisterUser };
