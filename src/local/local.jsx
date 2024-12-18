import React from 'react';
import './local.css';
import { NavLink } from 'react-router-dom';

export default function Local() {
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

      {/* Hero Section */}
      <main className="w-full h-screen relative flex items-center overflow-hidden rounded-lg mt-4">
        <img
          src="/dna_landing.webp"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          alt="Background DNA"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 text-center bg-gray-800 bg-opacity-75 p-6 rounded-lg">
          <h2 className="mb-4 text-white uppercase text-3xl md:text-5xl font-bold leading-tight tracking-wide">
            Your research, faster.
          </h2>
          <NavLink
            to="/login"
            className="inline-block uppercase bg-blue-500 hover:bg-blue-600 py-3 px-6 text-sm text-white rounded-lg transition-all"
          >
            Get Started
          </NavLink>
        </div>
      </main>

      {/* Introduction Section */}
      <section className="flex items-center mt-8">
        <img src="/logo.png" alt="Genechat Logo" className="h-16 mr-4" />
        <div className="text-gray-300">
          <p className="text-lg">
            Accelerate your genetic understanding and research with our cutting-edge AI-powered resources.
          </p>
        </div>
      </section>

      {/* Features Section */}
      {[
        {
          imgSrc: "/analysis.png",
          title: "Understanding genetic test results can be hard.",
          description: "Consumer test results are often presented in medical jargon, making it challenging to understand the details and implications.",
        },
        {
          imgSrc: "/jigsaw.png",
          title: "Decipher the puzzle.",
          description: "With our genetic database and AI chat buddy, you can understand your test results in seconds.",
        },
        {
          imgSrc: "/advice.png",
          title: "Consult your doctor.",
          description:
            "With a preliminary understanding of your results, you can be informed to ask important questions to your physician about care or necessary actions.",
        },
      ].map((feature, index) => (
        <section
          key={index}
          className="bg-gray-800 bg-opacity-75 px-8 py-8 mt-8 rounded-lg overflow-hidden flex items-center"
        >
          <div className="w-1/4 p-4">
            <img src={feature.imgSrc} alt={feature.title} className="w-full h-auto rounded-lg" />
          </div>
          <div className="w-3/4 p-4 text-gray-300">
            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </section>
      ))}

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
