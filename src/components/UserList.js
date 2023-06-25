import React, { useEffect, useState } from 'react';
import '../styles/UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(data => setUsers(data.data));
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search by first_name" />
      <div className="user-list">
        {filteredUsers.map(user => (
          <div key={user.id} className="user-card">
            <div className="avatar-container">
              <img src={user.avatar} alt="User Avatar" className="avatar" />
            </div>
            <p className="user-id">{user.id}</p> {}
            <p>{user.first_name}</p> {}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;