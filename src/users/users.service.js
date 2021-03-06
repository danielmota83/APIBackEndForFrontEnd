const User = require("./user.js");

const createUser = async (body) => await User.create(body);

const findByEmail = async (email) => await User.findOne({ email: email });

const findByUsername = async (username) =>
  await User.findOne({ username: username });

const findAllUsers = async () => await User.find()

const findByIdUser = async (userId) => await User.findById(userId);

module.exports = {
  createUser,
  findByEmail,
  findByUsername,
  findAllUsers,
  findByIdUser
};