import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import logo from "../../../images/ChefConnect logo Light Mode.png";

import {adminLoginState, authStatusState} from "../../store/atom";
import adminService from "../../services/adminService";
import {useRecoilState} from "recoil";

function Login() {
  const nav = useNavigate();

  const [adminLogin, setAdminLogin] = useRecoilState(adminLoginState);
  const [authStatus, setAuthStatus] = useRecoilState(authStatusState);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthStatus((prev) => ({...prev, isLoading: true}));

    const formData = new FormData(e.target);
    const adminData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const result = await adminService.login(adminData);
      setAdminLogin(result);
      setToastVisible(true);
      setToastMessage("Logged In Successfully");
      setTimeout(() => setToastVisible(false), 2500);

      setAuthStatus({
        isLoading: false,
        isSuccess: true,
        isError: false,
        message: "Logged In Successfully",
      });
      console.log("Logged In Successfully");
      nav("/userPanel");
    } catch (err) {
      setToastVisible(true);
      setToastMessage("Incorrect Email or Password.");
      setTimeout(() => setToastVisible(false), 2500);
      setAuthStatus({
        isLoading: false,
        isSuccess: false,
        isError: true,
        message: err.message,
      });
    }
  };

  return (
    <React.Fragment>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/">
            <img
              alt="Your Company"
              src={logo}
              className="mx-auto h-32 w-auto"
            />
          </Link>

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="bg-gray-50 border  text-gray-900 text-sm  rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 placeholder-gray-400 ring-gray-300"
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
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="bg-gray-50 border  text-gray-900 text-sm  rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 placeholder-gray-400 ring-gray-300"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
          <Link to="/register">
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member? Register here
            </p>
          </Link>
          <Link to="/adminLogin">
            <p className="mt-10 text-center text-sm text-gray-500">
              Admin ? Please Log in here
            </p>
          </Link>
        </div>
        {/*  */}
        {toastVisible && (
          <div className="fixed bottom-4 right-4 z-[1000]">
            <div
              id="toast-simple"
              className="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 border border-blue-700 text-white  divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow"
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
              <div className="ps-4 text-sm font-normal">{toastMessage}</div>
            </div>
          </div>
        )}

        {/*  */}
      </div>
    </React.Fragment>
  );
}

export default Login;
