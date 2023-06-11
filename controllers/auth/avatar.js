const { User } = require("../../models/user");
const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");

// const avatarsDir = path.resolve("public/avatars");
const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
    const { _id } = req.user;
    const { path: tempUpload, originalname } = req.file;
    const filename = `${_id}_${originalname}_avatar`;

    try {
        const image = await Jimp.read(tempUpload);
        await image.resize(250, 250).writeAsync(tempUpload);
    } catch (err) {
    console.error(err);
    };

    const resultUpload = path.join(avatarsDir, filename);
    await fs.rename(tempUpload, resultUpload);

    const avatarURL = path.join("avatars", filename);
    await User.findByIdAndUpdate(_id, { avatarURL }, {new: true});

    res.json({
        avatarURL,
    })
};

module.exports = updateAvatar;