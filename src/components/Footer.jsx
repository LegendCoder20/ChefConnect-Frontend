import React from "react";
import logo from "../../images/ChefConnect logo Dark Mode.png";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <React.Fragment>
      <div className="main-footer bg-black">
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 mt-10">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a
                href=""
                className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
              >
                <img src={logo} className="h-16" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  ChefConnect
                </span>
              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    Licensing
                  </a>
                </li>

                <li>
                  <Link to="/contactme" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024
              <a href="" className="hover:underline">
                ChefConnect™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default Footer;
