const createTable = users => {
  const table = document.createElement('table');
  headRow = document.createElement('tr');
  const name = document.createElement('th');
  name.textContent = 'Name';
  const username = document.createElement('th');
  username.textContent = 'Username';
  const email = document.createElement('th');
  email.textContent = 'Email';
  const phone = document.createElement('th');
  phone.textContent = 'Phone';
  const website = document.createElement('th');
  website.textContent = 'Website';

  headRow.appendChild(name);
  headRow.appendChild(username);
  headRow.appendChild(email);
  headRow.appendChild(phone);
  headRow.appendChild(website);

  table.appendChild(headRow);

  users.forEach(user => {
    table.appendChild(createRow(user));
  });
  return table;
};
