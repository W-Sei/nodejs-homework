const { Contact } = require("../../models");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;

  // const skip = (page - 1) * limit;
  // const query = { owner };

  // if (favorite) {
  //   query.favorite = favorite === "true";
  // }

  // const result = await Contact.find(query, "-createdAt -updatedAt", { skip, limit }).populate("owner", "email");
  // res.json(result);

  res.json(
    await Contact.find(favorite === undefined ? { owner } : { owner, favorite })
      .populate("owner", "email")
      .limit(limit * 1)
      .skip((page - 1) * limit)
  );
};

module.exports = getAll;
