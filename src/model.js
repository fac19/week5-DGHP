const db = require("./db/connection.js")

function newPost(message){
    return  db.query('INSERT INTO users(username) VALUES($1)', [message.username])
   .then( () => {
     return db.query(`SELECT id FROM users where username=($1)`, [message.username])
       .then(item => {
         return item.rows.map(obj => obj.id)
       }).then(idArr => {
         return db.query('INSERT INTO blog_posts(author_id, post) VALUES($1, $2)', [idArr[0], message.post_text])
       });
    }
   ) 
}

module.exports = {newPost}

