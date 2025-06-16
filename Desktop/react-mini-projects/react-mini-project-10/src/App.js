import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((e) => console.log(e));
  }, []);

  const filtered = users.filter((user) => {
    const searchText = search.toLowerCase();
    return (
      user.name.toLowerCase().includes(searchText) ||
      user.email.toLowerCase().includes(searchText) ||
      user.address.city.toLowerCase().includes(searchText)
    );
  });

  return (
    <div>
      <h2>Users</h2>
      <input
        type="text"
        className="in"
        placeholder="Search by name, email, or city"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="t">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
       <tbody>
  {filtered.length > 0 ? (
    filtered.map((user) => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.address.city}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4" style={{ textAlign: 'center', color: 'red' }}>
        User not found
      </td>
    </tr>
  )}
</tbody>
      </table>
    </div>
  );
}

export default App;
