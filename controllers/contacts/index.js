const { ctrlWrapper } = require("../../decorators");

const getAll = require("./getAll");
const getById = require("./getById");
const addCont = require("./addCont");
const deleteById = require("./deleteById");
const updateById = require("./updateById");
const updateContactStatus = require("./updateContactStatus");

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addCont: ctrlWrapper(addCont),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
  updateContactStatus: ctrlWrapper(updateContactStatus),
};