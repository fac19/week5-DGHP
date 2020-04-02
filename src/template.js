function sharedLayout(bodyContent) {
  return `<!DOCTYPE html>
    <html lang="en">    
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description" content="Pink Punk">
            <link rel="stylesheet" href="public/main.css">
            <title>Pink Punk</title>
        </head>
        <header>
          <h1>Pink Punk</h1>
          <nav>
          <p><a>Read posts</a></p>
          <p><a>Submit a post</a></p>
          </nav>
        </header>
        <body>
            <div class="container">
                ${bodyContent}
            </div>
        </body>
        <script src="public/main.js"></script>
    </html>
    `;
}

function makeArticle(obj) {
  return `    
  <section>
    <article class="post" data-index=${obj.id}>
      <p class="post__author">By: ${obj.name}</p>
      <p class="post__date">When: ${obj.post_date}</p>
      <p class="post__textContent">${obj.post}</p>
      <button
        class="post__remove-button"
        aria-label="button to remove post"
        type="button"
      >
        Remove Post
      </button>
    </article>
  </section>`;
}

function home(postObjArr) {
  let str = postObjArr.map(item => makeArticle(item)).join("\n");
  return sharedLayout(str);
}

function submitPage() {
  return sharedLayout(
    `
    <form action="submit" method="POST">
      <label for="username">Username</label>
      <input id="username" name="username" placeholder="who are you?" required>
      <label for="post_text">Write Post</label>
      <textarea id="post_text" maxlength=500 name="post_text" aria-label="write blog here" placeholder="what are you thinking about?" required></textarea>
      <button type="submit">Add Post</button>
    </form>
  `
  );
}

function missingPage() {
  return `
  <img class="missing-resource-image" href="https://media.giphy.com/media/VwoJkTfZAUBSU/giphy.gif" alt="404 resource not found">
  `;
}

module.exports = { submitPage, missingPage, home };
