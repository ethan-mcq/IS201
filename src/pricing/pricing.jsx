import React from 'react';
import './pricing.css';
import { NavLink } from 'react-router-dom';

export default function Pricing() {
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

      {/* Pricing Plans */}
      <div className="flex flex-col lg:flex-row justify-between mt-8 mb-8 space-y-8 lg:space-y-0 lg:space-x-4">
        {[
          {
            plan: "Basic Plan",
            price: "$5/month",
            features: [
              "5 analyses per month",
              "PDF reports for each analysis",
              "Saved logs to reference later",
            ],
            buttonText: "Sign Up for Basic Plan",
          },
          {
            plan: "Pro Plan",
            price: "$40/month",
            features: [
              "Unlimited analyses every month",
              "PDF reports for each analysis",
              "Saved logs to reference later",
            ],
            buttonText: "Sign Up for Pro Plan",
          },
        ].map((plan, index) => (
          <section
            key={index}
            className="bg-gray-800 bg-opacity-75 px-8 py-8 rounded-lg flex flex-col items-center shadow-lg"
          >
            <div className="w-full flex flex-col items-center">
              <img
                src="/advice.png"
                alt={plan.plan}
                className="w-16 h-16 rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-blue-400 mb-2 text-center">
                {plan.plan} - <span className="text-white">{plan.price}</span>
              </h3>
              <hr className="w-full border-gray-500 mb-4" />
              <ul className="text-gray-300 list-disc list-inside mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <NavLink
                to="/create"
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
              >
                {plan.buttonText}
              </NavLink>
            </div>
          </section>
        ))}
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
