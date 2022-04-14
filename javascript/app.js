const app = async () => {
  const root = document.getElementById('root');

  const header = document.createElement('h1');
  header.textContent = 'User Post';
  header.classList.add('title');
  root.appendChild(header);

  const users = await fetchUsers();
  root.appendChild(createTable(users));
};

document.addEventListener('DOMContentLoaded', app);
