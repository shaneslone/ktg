const createPost = ({ title, body }) => {
  const post = document.createElement('div');
  post.classList.add('post');
  const postTitle = document.createElement('h3');
  const postBody = document.createElement('p');

  postTitle.textContent = title;
  postBody.textContent = body;

  post.appendChild(postTitle);
  post.appendChild(postBody);

  return post;
};
