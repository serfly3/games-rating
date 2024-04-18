const { createRating , updateRating }  = require("./calculations");
const { PATH_TO_RATING_FILE } = require("./config");

module.exports = {
  createRating,
  updateRating,
  PATH_TO_RATING_FILE
};
