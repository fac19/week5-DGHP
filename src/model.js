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

function newPost(message) {
  return db
    .query("INSERT INTO users(username) VALUES($1)", [message.username])
    .then(() => {
      return db
        .query(`SELECT id FROM users where username=($1)`, [message.username])
        .then(item => {
          return item.rows.map(obj => obj.id);
        })
        .then(idArr => {
          return db.query(
            "INSERT INTO blog_posts(author_id, post) VALUES($1, $2)",
            [idArr[0], message.post_text]
          );
        });
    });
}

module.exports = { newPost, getPosts };
