function submitPage() {
  return sharedContent(
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

module.exports = { submitPage, missingPage };
