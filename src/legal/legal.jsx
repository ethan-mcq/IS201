import React from 'react';
import './legal.css';
import { NavLink } from 'react-router-dom';

export default function Legal() {
  return (
    <div className="font-sans font-thin p-20 bg-gray-900 text-gray-300">
      {/* Header */}
      <header className="bg-gray-800 bg-opacity-75 px-8 py-8 flex justify-between items-center rounded-lg overflow-hidden">
        <img src="/logo.png" alt="Genechat Logo" className="h-12" />
        <ul className="hidden md:flex lowercase text-sm">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-300 hover:text-white active-tab"
                  : "text-gray-300 hover:text-white non-active"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="ml-8">
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-300 hover:text-white active-tab"
                  : "text-gray-300 hover:text-white non-active"
              }
            >
              Pricing
            </NavLink>
          </li>
          <li className="ml-8">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-300 hover:text-white active-tab"
                  : "text-gray-300 hover:text-white non-active"
              }
            >
              Login + Chat
            </NavLink>
          </li>
        </ul>
      </header>

      {/* Main Content */}
      <div className="flex justify-between mt-8 mb-8">
        <section className="bg-gray-800 bg-opacity-75 px-8 py-8 rounded-lg overflow-hidden flex flex-col items-center w-full mx-2 shadow-lg">
          <div className="w-full p-4 flex flex-col items-center">
            <img
              src="/CLIA-Certification.webp"
              alt="CAP/CLIA Certification"
              className="w-32 h-16 rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-400 mb-2 text-center">
              CAP/CLIA Certified
            </h3>
            <hr className="w-full border-gray-500 mb-4" />
            <ul className="text-gray-300 list-disc list-inside space-y-2">
              <li>Protect your data</li>
              <li>Certified integrity</li>
              <li>Encrypted data management</li>
            </ul>
            <a
              href="https://www.cms.gov/medicare/quality/clinical-laboratory-improvement-amendments"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
            >
              Read more about CLIA
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-500 px-12 py-8 flex flex-wrap">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "hover:text-white text-white" : "hover:text-white"
            }
          >
            Home
          </NavLink>
          <span className="px-4">|</span>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "hover:text-white text-white" : "hover:text-white"
            }
          >
            Pricing
          </NavLink>
          <span className="px-4">|</span>
          <NavLink
            to="/legal"
            className={({ isActive }) =>
              isActive ? "hover:text-white text-white" : "hover:text-white"
            }
          >
            Legal
          </NavLink>
          <span className="px-4">|</span>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "hover:text-white text-white" : "hover:text-white"
            }
          >
            Login + Chat
          </NavLink>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-right">
          <a
            href="https://github.com/ethan-mcq/startup"
            className="hover:text-white"
          >
            GitHub
          </a>
          <span className="px-4">|</span>
          &copy; 2024
        </div>
      </footer>
    </div>
  );
}
