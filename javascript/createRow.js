const createRow = ({ id, name, username, email, phone, website }) => {
  const row = document.createElement('tr');
  row.classList.add('user');
  row.appendChild(createCell(name));
  row.appendChild(createCell(username));
  row.appendChild(createCell(email));
  row.appendChild(createCell(phone));
  row.appendChild(createCell(website));

  row.addEventListener('click', () => {
    displayPost({ id, username });
  });

  return row;
};
