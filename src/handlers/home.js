const templates = require("../template");
const db = require("../db/connection.js");

function homeHandler(request, response) {
  //   db.query("SELECT * FROM blog_posts")
  //     .then(result => result.rows)
  //     .then(posts => {
  //       let str = "";
  //       const userList = users.map(post => home(post));

  //       //   response.writeHead(200, { "content-type": "text/html" });
  //       //   response.end(`<ul>${userList.join("")}</ul>`);
  //     });
  // tom's practice
  db.query("SELECT * FROM blog_posts")
    .then(result => result.rows)
    .then(posts => {
      response.end(templates.home(posts));
      //   let str = "";
      //   const userList = users.map(post => home(post));

      //   response.writeHead(200, { "content-type": "text/html" });
      //   response.end(`<ul>${userList.join("")}</ul>`);
    });

  //   db.query("SELECT * FROM users")
  //     .then(result => result.rows)
  //     .then(users => {
  //       const userList = users.map(user => `<li>${user.username}</li>`);
  //       response.writeHead(200, { "content-type": "text/html" });
  //       response.end(`<ul>${userList.join("")}</ul>`);
  //     });
  //   response.writeHead(200, { "content-type": "text/html" });
  //   response.end(`<h1>Hello</h1>`);
}

module.exports = homeHandler;

{
  /* <article class="post">
<p class="post__author">By: ${name}</p>
<p class="post__date">When: ${date}</p>
<p class="post__textContent">${textBox}</p>
<button
  class="post__remove-button"
  aria-label="button to remove post"
  type="button"
>
  Remove Post
</button>
</article> */
}
