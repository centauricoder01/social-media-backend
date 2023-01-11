const { UserModel } = require("../../Models/User.model");
const bcrypt = require("bcrypt");

const RegisterUser = async (req, res) => {
  const { username, password, name, email } = req.body;
  let getbyemail = await UserModel.find({ email });
  if (getbyemail) {
    return res.send("User already exist");
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
    res.send(newUser);
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = { RegisterUser };
