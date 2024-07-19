import React, { useState } from 'react';
import Header from './Header';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header toggleNav={toggleNav} />
      <div className="relative flex">
        <button
          onClick={toggleNav}
          className="fixed top-0 left-0 text-gray-300 m-2 hover:text-white focus:outline-none focus:text-white"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="p-4">
            <div className="flex p-2 m-2">
              <h2 className="text-xl font-bold">Fit Me</h2>
              <button onClick={toggleNav} className="text-xl ms-2 font-bold">
                X
              </button>
            </div>
            <nav className="mt-4">
              <ul>
                <li className="py-2 px-4 hover:bg-gray-700 rounded-md">
                  <a href="#home">Home</a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-700 rounded-md">
                  <a href="#about">About</a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-700 rounded-md">
                  <a href="#services">Services</a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-700 rounded-md">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
