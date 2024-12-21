import React, { useState, useEffect } from 'react';
import HeaderPage from '../components/HeaderPage';
import FooterPage from '../components/FooterPage';

const FakeUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
    <div>
        <HeaderPage />
      <div className="p-8 flex items-center justify-center min-h-screen">
        <p className="text-xl">Loading users...</p>
      </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 flex items-center justify-center min-h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div>
    <HeaderPage />
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">User List</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user, index) => (
          <li
            key={index}
            className="border rounded-lg p-4 flex flex-col items-center bg-white shadow-md"
          >
            <img
              src={user.picture.medium}
              alt={`${user.name.first} ${user.name.last}`}
              className="rounded-full mb-4 w-24 h-24 object-cover"
            />
            <h3 className="text-xl font-semibold">{`${user.name.first} ${user.name.last}`}</h3>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.location.city}, {user.location.country}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default FakeUser;
