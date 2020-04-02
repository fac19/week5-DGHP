const templates = require("../template");
const model = require("../model");
function deletePost(req) {
  model.deletePost(req);
}

module.exports = deletePost;
