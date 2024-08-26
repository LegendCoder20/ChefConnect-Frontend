import React, {useEffect, useState} from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {Bars3Icon, BellIcon, XMarkIcon} from "@heroicons/react/24/outline";
import "../../styles/navbar.css";
import logo from "../../images/chefconnect logo name.png";
import ribbon from "../../images/navbar-design.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import profilePhoto from "../../images/profile.jpg";
import "../index.css";

import {capitalizeFirstLetterOfEachWord} from "../utils/capitalizeAll";

const searchBar = <FontAwesomeIcon icon={faMagnifyingGlass} beat />;

const user = {
  imageUrl: profilePhoto,
};

const navigation = [
  {name: "Home", href: "/", current: true},
  {name: "About", href: "/aboutus", current: true},
  {name: "Contact Us", href: "/contactme", current: true},
];
const userNavigation = [
  {name: "Your Profile", href: "/adminPanel"},
  {name: "Sign out", href: "/"},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const nav = useNavigate();

  const [username, setUsername] = useState(null);
  // const [userProfilePhoto, setUserProfilePhoto] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchUserData = async () => {
      let API_URL = "https://chefconnect-backend.onrender.com/api/users/me";
      let token = localStorage.getItem("Admin");

      if (!token) {
        console.log(
          "No token found, User has no Token in his LocalStorage, Guest User"
        );
      }

      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUsername(response.data.user.username);
        // setUserProfilePhoto(response.data.user);
        //// Above Code do ===  add profile photo option in register and let user add his profile photo then we will store it in database and then fetch its public id and display his profile photo in navbar
      } catch (err) {
        console.log(
          "Some Problem occured while Authenticating the Token from Frontend ",
          err
        );
      }
    };

    fetchUserData();
  }, []);

  // Function will run when user will SignOut
  const signOutUser = () => {
    localStorage.removeItem("Admin");
    nav("/");
    window.location.reload();
  };

  return (
    <React.Fragment>
      <div className="navbar">
        <div className="min-h-full">
          <Disclosure as="nav" className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-2">
              <div className="flex h-36 md:h-32 lg:h-20 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link to="/">
                      <img
                        alt="Your Company"
                        src={logo}
                        className="h-16 w-56 blinking-image"
                      />
                    </Link>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-6 flex items-baseline space-x-4">
                      {navigation.map((item, index) => (
                        <Link to={item.href} key={index}>
                          <div
                            key={item.name}
                            aria-current={item.current ? "page" : undefined}
                            className={classNames(
                              item.current
                                ? "bg-gray-800 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "rounded-md px-3 py-2  font-medium text-lg"
                            )}
                          >
                            {item.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    {/* Search bar
                    <div className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <input
                        type="text"
                        placeholder="  Search Recipe here "
                        id="search-bar"
                        style={{
                          marginRight: "14px",
                          borderRadius: "20px",
                          height: "34px",
                          color: "black",
                          paddingLeft: "10px",
                        }}
                        maxLength={24}
                      />
                      {searchBar}
                    </div> */}

                    {/* Profile dropdown */}
                    {/* Instead of username put userProfilePhoto */}

                    <Menu as="div" className="relative ml-3">
                      {username ? (
                        <>
                          <div>
                            <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              <img
                                alt="User profile"
                                src={user.imageUrl}
                                className="h-16 w-24 rounded-full"
                              />
                              <div className="text-white ml-3 text-4xl text-yellow-300 font-cursive font-medium ">
                                {/* <p className="font-medium text-white"> Welcome,</p> */}
                                {capitalizeFirstLetterOfEachWord(username)}
                              </div>
                            </MenuButton>
                          </div>
                          <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            <MenuItem>
                              <Link
                                to="/adminPanel"
                                className={
                                  "block px-4 py-2 text-sm bg-gray-100 text-gray-900"
                                }
                              >
                                {"Your Profile"}
                              </Link>
                            </MenuItem>
                            <MenuItem>
                              <Link
                                to="/"
                                onClick={signOutUser}
                                className={
                                  "block px-4 py-2 text-sm bg-gray-100 text-gray-900"
                                }
                              >
                                {"Sign Out"}
                              </Link>
                            </MenuItem>
                          </MenuItems>
                        </>
                      ) : (
                        <div>
                          <Link to="/login">
                            <button
                              type="submit"
                              className="flex w-full justify-center rounded-md bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 mx-4 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Login
                            </button>
                          </Link>
                        </div>
                      )}
                    </Menu>
                  </div>
                </div>

                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon
                      aria-hidden="true"
                      className="block h-6 w-6 group-data-[open]:hidden"
                    />
                    <XMarkIcon
                      aria-hidden="true"
                      className="hidden h-6 w-6 group-data-[open]:block"
                    />
                  </DisclosureButton>
                </div>
              </div>
            </div>

            <DisclosurePanel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Link to={item.href} key={item.name}>
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                    >
                      {item.name}
                    </DisclosureButton>
                  </Link>
                ))}
              </div>

              {/* IF User Exists then Show Profile else Show Register */}

              {username ? (
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        alt=""
                        src={user.imageUrl}
                        className="h-12 w-16 rounded-full"
                      />
                    </div>
                    <div className="ml-2">
                      <div className=" font-medium leading-none text-3xl font-cursive  text-yellow-300">
                        {capitalizeFirstLetterOfEachWord(username)}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item, index) => (
                      <DisclosureButton
                        onClick={signOutUser}
                        key={index}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </div>
                </div>
              ) : (
                <Link to="/login">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Login
                  </button>
                </Link>
              )}
            </DisclosurePanel>
          </Disclosure>
          <div className="ribbon ">
            <img src={ribbon} alt="" />
          </div>

          {/* <main>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                itaque cumque possimus odio reiciendis harum quaerat? Vitae
                iusto molestias corrupti facere eligendi quasi doloremque earum
                nesciunt possimus, repellendus, ut laborum.
              </p>
            </div>
          </main> */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
