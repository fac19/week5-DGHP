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

module.exports = { home };
