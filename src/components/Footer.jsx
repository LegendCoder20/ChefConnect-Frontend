import React, {useEffect} from "react";
import logo from "../../images/ChefConnect logo Dark Mode.png";
import {Link} from "react-router-dom";

function Footer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [logo]);

  return (
    <React.Fragment>
      <div className="main-footer bg-black">
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 mt-10">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <Link
                to="/"
                className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
              >
                <img src={logo} className="h-16" alt="ChefConnect Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  ChefConnect
                </span>
              </Link>

              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <Link to="/aboutus" className="hover:underline me-4 md:me-6">
                    About
                  </Link>
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
              <Link to="/" className="hover:underline">
                ChefConnect™
              </Link>
              . All Rights Reserved by <b>Owner - </b>
              <span className="pl-1 font-bold">Aryan Manjarekar</span>
            </span>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default Footer;
