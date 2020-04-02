const db = require("./db/connection.js");

function getPosts() {
  return db
    .query(
      `
        SELECT *
        FROM users
        LEFT JOIN blog_posts ON users.id = blog_posts.author_id; `
    )
    .catch(err => {
      console.log("Here be error   ", err);
    });
}

getPosts().then(thing => console.log(thing.rows));

module.exports = { getPosts };
