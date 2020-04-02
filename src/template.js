function submitPage(params) {
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

module.exports = { submitPage };
