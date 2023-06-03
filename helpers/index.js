// const HttpError = require("./HttpError");

// module.exports = {
//   HttpError,
// };

const HttpError = require("./HttpError");
const handleMongooseErr = require("./handleMongooseErr");

module.exports = {
    HttpError,
    handleMongooseErr,
}
