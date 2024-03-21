const userServices = require("../services/userServices");

const getAllUsers = (req, res) => {
  res.send({ users: userServices.getAllUsers() }).status(200);
};

module.exports = { getAllUsers };
