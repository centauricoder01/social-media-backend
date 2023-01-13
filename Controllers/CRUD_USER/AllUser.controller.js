const { UserModel } = require("../../Models/User.model");

const AllUser = async (req, res) => {
  try {
    let ALLUSER = await UserModel.find();
    res.send({ message: "All User", Alluser: ALLUSER });
  } catch (error) {
    res.send({ message: error });
  }
};

module.exports = { AllUser };
