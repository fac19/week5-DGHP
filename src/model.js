const db = require("./db/connection.js");

function getPosts() {
  db.query("SELECT * from blog_posts;")
    // db.query(
    //   `
    // SELECT blog_posts.post, blog_posts.post_date, blog_posts.id, users.username
    // FROM blog_posts
    // INNER JOIN users ON blog_post.author_id = users.id;
    // `)
    .catch(err => {
      console.log("Here be error   ", err);
    });
}
getPosts();
// console.log(getPosts());

// console.log(process.env);

module.exports = { getPosts };
