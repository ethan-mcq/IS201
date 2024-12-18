import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user's message to the chat
    setMessages((prev) => [...prev, { text: input, sender: 'user' }]);
    setInput(''); // Clear input field

    try {
      const response = await fetch('https://startup.gene-chat.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch chat response');
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.reply, sender: 'bot' }]);
    } catch (error) {
      console.error('Error connecting to chat server:', error);
      setMessages((prev) => [
        ...prev,
        { text: 'Error connecting to chat server. Please try again later.', sender: 'bot' },
      ]);
    }
  };

  return (
    <div className="font-sans font-thin bg-gray-900 text-gray-300 min-h-screen flex flex-col">
      {/* Header */}
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
              to="/account"
              className={({ isActive }) =>
                isActive ? 'text-gray-300 hover:text-white active-tab' : 'text-gray-300 hover:text-white non-active'
              }
            >
              Account Info
            </NavLink>
          </li>
          <li className="ml-8">
            <NavLink
              to="/chat"
              className={({ isActive }) =>
                isActive ? 'text-gray-300 hover:text-white active-tab' : 'text-gray-300 hover:text-white non-active'
              }
            >
              Chat
            </NavLink>
          </li>
        </ul>
      </header>

      {/* Main Chat Area */}
      <main className="flex-grow flex justify-center items-center mt-8 mb-8">
        <section className="bg-gray-800 bg-opacity-75 px-8 py-8 rounded-lg overflow-hidden w-full max-w-2xl flex flex-col h-full">
          <h2 className="text-2xl font-semibold text-center mb-6">Interactive Chat</h2>
          <div
            id="chat-window"
            className="flex-grow bg-gray-700 rounded-lg p-4 overflow-y-auto space-y-4"
            style={{ maxHeight: '400px' }} // Set a fixed height for the chat window
          >
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`${
                    msg.sender === 'user' ? 'bg-gray-600 text-right' : 'bg-blue-500 text-left'
                  } text-white px-4 py-2 rounded-lg max-w-xs`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form id="chat-form" className="mt-4 flex items-center space-x-4" onSubmit={handleSend}>
            <input
              type="text"
              id="chat-input"
              className="flex-grow px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            />
            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Send
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-500 px-12 py-8 flex flex-wrap">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'hover:text-white text-white' : 'hover:text-white')}
          >
            Home
          </NavLink>
          <span className="px-4">|</span>
          <NavLink
            to="/pricing"
            className={({ isActive }) => (isActive ? 'hover:text-white text-white' : 'hover:text-white')}
          >
            Pricing
          </NavLink>
          <span className="px-4">|</span>
          <NavLink
            to="/legal"
            className={({ isActive }) => (isActive ? 'hover:text-white text-white' : 'hover:text-white')}
          >
            Legal
          </NavLink>
          <span className="px-4">|</span>
          <NavLink
            to="/account"
            className={({ isActive }) => (isActive ? 'hover:text-white text-white' : 'hover:text-white')}
          >
            Account Info
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
