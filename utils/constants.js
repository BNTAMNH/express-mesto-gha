const STATUS_BAD_REQUEST = 400;
const STATUS_NOT_FOUND = 404;
const STATUS_SERVER_ERROR = 500;

const regExpUrl = /https?:\/\/\S+/g;

module.exports = {
  STATUS_BAD_REQUEST, STATUS_NOT_FOUND, STATUS_SERVER_ERROR, regExpUrl,
};
