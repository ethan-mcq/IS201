import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Account({ username }) {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    if (username) {
      fetch(`https://startup.gene-chat.com/account/${username}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch account information');
          }
          return res.json();
        })
        .then((data) => {
          setUserInfo(data);
          setName(data.name || ''); // Initialize name field
        })
        .catch(() => setError('Unable to load account information.'));
    }
  }, [username]);

  const handleSave = async () => {
    try {
      const response = await fetch(`https://startup.gene-chat.com/account/${username}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });
      const data = await response.json();
      if (response.ok) {
        setUserInfo((prev) => ({ ...prev, name })); // Update local userInfo
        setIsEditing(false);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error updating name:', error);
      setError('Failed to update account.');
    }
  };

  if (!username) {
    return <p>Please log in to view your account information.</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!userInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="font-sans font-thin p-20 bg-gray-900 text-gray-300">
      <header className="bg-gray-800 bg-opacity-75 px-8 py-8 flex justify-between items-center rounded-lg overflow-hidden">
        <img src="/logo.png" alt="Genechat Logo" className="h-12" />
        <ul className="hidden md:flex lowercase text-sm">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-gray-300 hover:text-white active-tab" : "text-gray-300 hover:text-white non-active"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="ml-8">
            <NavLink
              to="/chat"
              className={({ isActive }) =>
                isActive ? "text-gray-300 hover:text-white active-tab" : "text-gray-300 hover:text-white non-active"
              }
            >
              Chat
            </NavLink>
          </li>
        </ul>
      </header>

      <div className="flex justify-center mt-8 mb-8">
        <section className="bg-gray-800 bg-opacity-75 px-8 py-8 rounded-lg overflow-hidden flex flex-col items-center w-full max-w-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">Account Information</h2>
          <ul className="text-gray-300 space-y-6">
            <li className="flex justify-between border-b border-gray-600 pb-2">
              <span className="font-semibold">Name:</span>
              {isEditing ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-700 text-gray-300 rounded-lg px-2"
                />
              ) : (
                <span>{userInfo.name || 'N/A'}</span>
              )}
            </li>
            <li className="flex justify-between border-b border-gray-600 pb-2">
              <span className="font-semibold">Email:</span>
              <span>{userInfo.email}</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold">Username:</span>
              <span>{userInfo.username}</span>
            </li>
          </ul>
          {isEditing ? (
            <button
              onClick={handleSave}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Edit
            </button>
          )}
        </section>
      </div>
    </div>
  );
}
