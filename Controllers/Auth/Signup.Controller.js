const { UserModel } = require("../../Models/User.model");
const bcrypt = require("bcrypt");

const RegisterUser = async (req, res) => {
  const { username, password, firstname, lastname } = req.body;

  const salt = await bcrypt.genSalt(10);
  const HashedPass = await bcrypt.hash(password, salt);
  const newUser = new UserModel({
    username,
    password: HashedPass,
    firstname,
    lastname,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { RegisterUser };
