import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ color: '#333' }}>User Directory</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          marginBottom: '15px',
          padding: '8px',
          width: '250px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px',
        }}
      />

      {loading && <p style={{ color: 'blue' }}>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>Something went wrong while fetching users.</p>}

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {users
          .filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase())
          )
          .map(user => (
            <li
              key={user.id}
              style={{
                marginBottom: '10px',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <strong>{user.name}</strong> — {user.email} — {user.phone} — {user.company.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;

/*import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>User Directory</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px', width: '200px' }}
      />

      {loading && <p>Loading users...</p>}
      {error && <p>Something went wrong while fetching users.</p>}

      <ul>
        {users
          .filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase())
          )
          .map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.email} — {user.phone} — {user.company.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;*/
