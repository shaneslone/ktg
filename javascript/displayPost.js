const displayPost = async ({ id, username }) => {
  const postContainer = document.getElementById('postContainer');
  postContainer.replaceChildren();
  const header = document.createElement('h2');
  header.classList.add('title');
  header.textContent = `${username}'s Post`;

  postContainer.appendChild(header);
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}/posts`
    );
    const posts = await res.json();
    posts.forEach(post => {
      postContainer.appendChild(createPost(post));
    });
  } catch (e) {
    console.log(e);
  }
};
