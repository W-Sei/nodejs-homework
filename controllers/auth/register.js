const bcrypt = require("bcrypt");
const gravatar = require("gravatar");

const { User } = require("../../models");
const { HttpError, sendEmail } = require("../../helpers");

const { nanoid } = require("nanoid");
const { PROJECT_URL } = process.env;

const register = async (req, res, next) => {
  const { email, password } = req.body;
  const userEmail = await User.findOne({ email });
  const userPassword = await User.findOne({ password });

  if (userEmail) {
    throw HttpError(409, "Email already in use");
  }
  if (userPassword) {
    throw HttpError(409, "Password already in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationCode = nanoid();

  const newUser = await User.create({ ...req.body, password: hashPassword, avatarURL, verificationCode });
  const verifyEmail = {
    to: email,
    subject: "Verify your email",
    html: `<a target="_blank" href="${PROJECT_URL}/api/auth/verify/${verificationCode}">Click here to verify your email</a>`,
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    email: newUser.email,
    name: newUser.name,
    subscription: newUser.subscription,
  });
};

module.exports = register;
