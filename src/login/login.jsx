import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Prevent double submissions

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);

    console.log('Login attempt:', { username, password }); // Debug log

    try {
      const response = await fetch('https://startup.gene-chat.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data); // Debug log
        onLogin(data.user.username); // Pass the logged-in username to parent
        navigate('/chat'); // Redirect to Chat page
      } else {
        console.error('Login failed:', data.message); // Debug log
        setError(data.message); // Display backend error message
      }
    } catch (error) {
      console.error('Error during login:', error); // Debug log for unexpected errors
      setError('Unable to log in. Please try again.');
    } finally {
      setIsSubmitting(false); // Allow resubmission after completion
    }
  };

  return (
    <div className="font-sans font-thin p-20 bg-gray-900 text-gray-300">
      <header className="bg-gray-800 bg-opacity-75 px-8 py-8 flex justify-between items-center rounded-lg overflow-hidden">
        <img src="/logo.png" alt="Genechat Logo" className="h-12" />
        <ul className="hidden md:flex lowercase text-sm">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-gray-300 hover:text-white active-tab' : 'text-gray-300 hover:text-white non-active'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="ml-8">
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive ? 'text-gray-300 hover:text-white active-tab' : 'text-gray-300 hover:text-white non-active'
              }
            >
              Pricing
            </NavLink>
          </li>
          <li className="ml-8">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'text-gray-300 hover:text-white active-tab' : 'text-gray-300 hover:text-white non-active'
              }
            >
              Login + Chat
            </NavLink>
          </li>
        </ul>
      </header>

      <main className="flex justify-center items-center h-screen">
        <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg w-96 shadow-lg">
          <h1 className="text-2xl text-center font-semibold mb-6">Login</h1>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                disabled={isSubmitting} // Disable button while submitting
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:bg-blue-700 disabled:opacity-50"
              >
                Login
              </button>
              <NavLink
                to="/create"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:bg-blue-700"
              >
                Create Account
              </NavLink>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
