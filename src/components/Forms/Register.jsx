import React, {useEffect, useState} from "react";
import logo from "../../../images/ChefConnect logo Light Mode.png";
import {useNavigate, Link} from "react-router-dom";

import adminService from "../../services/adminService";
import {
  adminRegisterState,
  adminLoginState,
  authStatusState,
} from "../../store/atom";
import {useRecoilState} from "recoil";

function Register() {
  const nav = useNavigate();

  const [adminRegister, setAdminRegister] = useRecoilState(adminRegisterState);
  const [authStatus, setAuthStatus] = useRecoilState(authStatusState);
  const [toastVisible, setToastVisible] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setAuthStatus((prev) => ({...prev, isLoading: true}));

    const formData = new FormData(e.target);
    const adminData = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const cpassword = formData.get("cpassword");
    if (adminData.password !== cpassword) {
      console.log("Password Doesn't Match");
      return;
    }

    try {
      const result = await adminService.register(adminData);
      setAdminRegister(result);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2500);

      setAuthStatus({
        isLoading: false,
        isSuccess: true,
        isError: false,
        message: "Registered Successfully",
      });
      nav("/adminPanel");
    } catch (err) {
      setAuthStatus({
        isLoading: false,
        isSuccess: false,
        isError: true,
        message: err.message,
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/">
            <img
              alt="Your Company"
              src={logo}
              className="mx-auto h-24 w-auto"
            />
          </Link>

          <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
          <form method="POST" className="space-y-6" onSubmit={handleRegister}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm border border-e-0 rounded-s-md dark:text-gray-400 -gray-600">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="rounded-none bg-gray-50 border text-gray-900 text-sm focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 placeholder-gray-400 ring-gray-300"
                  placeholder="eg. Aryan"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 "
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 placeholder-gray-400 ring-gray-300"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 placeholder-gray-400 ring-gray-300"
                />
              </div>
              <div
                id="toast-success"
                className="flex items-center w-full max-w-sm p-4 mb-4 text-black bg-white rounded-lg shadow"
                role="alert"
              >
                <div className="ms-3 text-sm font-normal ">
                  Password Should be atleast <b> 6 Characters Long</b> along
                  with
                  <b> 1 Special Character</b>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="cpassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="cpassword"
                  name="cpassword"
                  type="password"
                  required
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 placeholder-gray-400 ring-gray-300"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>
          <Link to="/login">
            <p className="mt-5 text-center text-sm text-gray-500">
              Existing User? Login Here
            </p>
          </Link>
        </div>
        {/*  */}
        {toastVisible && (
          <div className="fixed bottom-4 right-4 z-[1000]">
            <div
              id="toast-simple"
              className="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse bg-lime-400 divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow"
              role="alert"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <div className="ps-4 text-sm font-normal">
                Registered Successfully
              </div>
            </div>
          </div>
        )}

        {/*  */}
      </div>
    </React.Fragment>
  );
}

export default Register;
