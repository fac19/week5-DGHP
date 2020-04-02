const templates = require("../template");
const db = require("../db/connection.js");

function homeHandler(request, response) {
  db.query("SELECT * FROM blog_posts")
    .then(result => result.rows)
    .then(posts => {
      response.end(templates.home(posts));
    });
}

module.exports = homeHandler;
