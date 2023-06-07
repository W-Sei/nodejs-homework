const { getAll, getById, addCont, deleteById, updateById, updateContactStatus } = require("./contacts");

const { register, login, getCurrent, logout, updateSubscription } = require("./auth");

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
};
