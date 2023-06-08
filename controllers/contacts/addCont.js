const { Contact } = require("../../models");

const addCont = async (req, res) => {
  const newContact = await Contact.create(req.body);
  res.status(201).json(newContact);
};

module.exports = addCont;
