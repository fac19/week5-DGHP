const deleteHandler = require("./handlers/delete.js");
const homeHandler = require("./handlers/home.js");
const missingHandler = require("./handlers/missing.js");
const publicHandler = require("./handlers/public.js");
const submitGetHandler = require("./handlers/submitGet.js");
const submitPostHandler = require("./handlers/submitPost.js");
const db = require("./db/connection.js")

function router(request, response) {
  const url = request.url;
  const method = request.method;

  if (url === "/") {
    db.query("SELECT * FROM users")
    .then(result => result.rows)
    .then(users => {
      const userList = users.map(user => `<li>${user.username}</li>`);
      response.writeHead(200, { "content-type": "text/html" });
      response.end(`<ul>${userList.join("")}</ul>`);
      })
    // homeHandler(request, response);
  } else if (url === "/submit" && method === "GET") {
    submitGetHandler(request, response);
  } else if (url === "/submit" && method === "POST") {
    submitPostHandler(request, response);
  } else if (url.includes("public")) {
    publicHandler(request, response);
  } else if (url === "/delete" && method === "DELETE") {
    deleteHandler(request, response);
  } else {
    missingHandler(request, response);
  }
}

module.exports = router;
