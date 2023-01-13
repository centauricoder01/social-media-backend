const { UserModel } = require("../../Models/User.model");

const SearchUser = async (req, res) => {
  let body = req.body;
  let ALLUSER;
  try {
    if (body === {}) {
      ALLUSER = await UserModel.find();
    } else {
      ALLUSER = await UserModel.find({
        name: { $regex: req.body.name, $options: "i" },
      });
    }
    res.send({ message: "All User", Alluser: ALLUSER });
  } catch (error) {
    res.send({ message: "Server Error" });
  }
};

module.exports = { SearchUser };
