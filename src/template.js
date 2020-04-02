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
            ${bodyContent}
        </body>
        <script src="public/main.js"></script>
    </html>
    `;
}

function home() {
  return sharedLayout(`    
  <div class="container">
  <section>
    <article class="post">
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
    </article>
  </section>
</div>`);
}
