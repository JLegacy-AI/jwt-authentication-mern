const userModel = require("../models/userModel");

const getAllUsers = () => {
  return userModel;
};

const getUserById = (id) => {
  return userModel.find((user) => user.id === id);
};

const deleteUser = (id) => {
  if (userModel.find((user) => user.id === id)) {
    userModel = userModel.filter((user) => user.id !== id);
    return userModel;
  } else {
    return null;
  }
};

const updateUser = (id, updatedUser) => {
  let userIndex = userModel.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    userModel[userIndex] = { ...userModel[userIndex], ...updatedUser };
    return userModel[userIndex];
  } else {
    return null;
  }
};

module.exports = { getAllUsers, getUserById, deleteUser, updateUser };
