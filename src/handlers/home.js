const templates = require("../template");
const db = require("../db/connection.js");

function homeHandler(request, response) {
  db.query("SELECT * FROM users")
    .then(result => result.rows)
    .then(users => {
      const userList = users.map(user => `<li>${user.username}</li>`);
      response.writeHead(200, { "content-type": "text/html" });
      response.end(`<ul>${userList.join("")}</ul>`);
    });
  //   response.writeHead(200, { "content-type": "text/html" });
  //   response.end(`<h1>Hello</h1>`);
}

module.exports = homeHandler;
