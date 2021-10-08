import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav
        id="nav"
        class="fixed w-full z-30 top-0 text-white bg-gradient-to-r from-gray-900 to-green-600"
      >
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 ">
          <div class="pl-4 flex items-center"></div>
          <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20">
            <ul class="list-reset lg:flex justify-end flex-1 items-center">
              <li class="mr-3">
                <Link
                  to="/"
                  class="inline-block py-2 px-4 text-black no-underline hover:text-gray-800 hover:text-underline"
                >
                  Home
                </Link>
              </li>
              <li class="mr-3">
                <Link
                  to="/projects"
                  class="inline-block py-2 px-4 text-black font-bold no-underline hover:text-gray-800 hover:text-underline"
                >
                  Projects
                </Link>
              </li>
              <li class="mr-3">
                <Link
                  to="/skills"
                  class="inline-block py-2 px-4 text-black no-underline hover:text-gray-800 hover:text-underline"
                >
                  Skills
                </Link>
              </li>
              <li class="mr-3">
                <Link
                  to="/contact"
                  class="inline-block py-2 px-4 text-black no-underline hover:text-gray-800 hover:text-underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link
              class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              Link
              to="/Resume-for-ATS-2021.pdf"
            >
              Resume
            </Link>
          </div>
        </div>
        <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
      <footer className="footer">
        <p>@2021 Zack Anderson</p>
      </footer>
    </div>
  );
}

export default Nav;
