const { getAll, getById, addCont, deleteById, updateById, updateContactStatus } = require("./contacts");

const { register, login, getCurrent, logout, updateSubscription, updateAvatar } = require("./auth");

module.exports = {
  getAll,
  getById,
  addCont,
  deleteById,
  updateById,
  updateContactStatus,
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
};
