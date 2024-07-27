const User = require("../../models/User");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    return res.json(user);
  } catch (error) {
    next(error);
  }
};

const getOneUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params._id).populate("notifications");

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllUsers, createUser, getOneUser };
