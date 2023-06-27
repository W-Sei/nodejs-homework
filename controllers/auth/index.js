const { ctrlWrapper } = require("../../decorators");

const register = require("./register");
const login = require("./login");
const getCurrent = require("./current");
const logout = require("./logout");
const updateSubscription = require("./subscription");
const updateAvatar = require("./avatar");
const verify = require("./verify");
const resendVerificationEmail = require("./resendVerificationEmail");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateSubscription: ctrlWrapper(updateSubscription),
  updateAvatar: ctrlWrapper(updateAvatar),
  verify: ctrlWrapper(verify),
  resendVerificationEmail: ctrlWrapper(resendVerificationEmail),
};
