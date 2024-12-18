import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Create() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const payload = { username, password, email };
      console.log('Sending data:', payload); // Debug log
      const response = await fetch('https://startup.gene-chat.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Notify success
        navigate('/login'); // Redirect to login page
      } else {
        setError(data.message); // Show backend error message
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      setError('Error creating account. Please try again.');
    }
  };

  return (
    <div className="font-sans font-thin p-20 bg-gray-900 text-gray-300">
      <header className="bg-gray-800 bg-opacity-75 px-8 py-8 flex justify-between items-center rounded-lg overflow-hidden">
        <img src="/logo.png" alt="Genechat Logo" className="h-12" />
        <ul className="hidden md:flex lowercase text-sm">
          <li>
            <NavLink to="/" className="text-gray-300 hover:text-white">
              Home
            </NavLink>
          </li>
          <li className="ml-8">
            <NavLink to="/pricing" className="text-gray-300 hover:text-white">
              Pricing
            </NavLink>
          </li>
          <li className="ml-8">
            <NavLink to="/login" className="text-gray-300 hover:text-white">
              Login + Chat
            </NavLink>
          </li>
        </ul>
      </header>

      <main className="flex justify-center items-center h-screen">
        <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg w-full max-w-lg shadow-lg">
          <h1 className="text-2xl text-center font-semibold mb-6">Create Your Account</h1>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          <form onSubmit={handleCreateAccount} className="space-y-4 flex flex-col">
            <div className="flex flex-col">
              <label htmlFor="username" className="text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirm-password" className="text-gray-300 mb-2">
                Re-enter Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500"
                placeholder="Re-enter your password"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </main>


      <footer className="bg-gray-800 text-gray-500 px-12 py-8 flex flex-wrap">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0">
          <NavLink to="/" className="hover:text-white text-white">
            Home
          </NavLink>
          <span className="px-4">|</span>
          <NavLink to="/pricing" className="hover:text-white text-white">
            Pricing
          </NavLink>
          <span className="px-4">|</span>
          <NavLink to="/legal" className="hover:text-white text-white">
            Legal
          </NavLink>
          <span className="px-4">|</span>
          <NavLink to="/login" className="hover:text-white text-white">
            Login + Chat
          </NavLink>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-right">
          <a href="https://github.com/ethan-mcq/startup" className="hover:text-white">
            GitHub
          </a>
          <span className="px-4">|</span>
          &copy; 2024
        </div>
      </footer>
    </div>
  );
}
