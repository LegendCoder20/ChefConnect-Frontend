import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import logo from "../../../images/ChefConnect logo Light Mode.png";

function AdminLogin() {
  const nav = useNavigate();
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [count, setCount] = useState(0);

  const hPassword = (e) => {
    setPassword(e.target.value);
  };

  const adminLogin = (e) => {
    e.preventDefault();

    if (password === "legend_aryan") {
      nav("/ownerPanel");
    } else {
      alert(
        "You Entered Wrong Password. Please Wait for 30 Seconds to Re-Login Again."
      );

      setDisabled(true);

      let intervalId = setInterval(() => {
        setCount((c) => {
          if (c === 30) {
            // clearInterval(intervalId);
            setDisabled(false);
            return c;
          }
          return c + 1;
        });
      }, 1000);

      setTimeout(() => {
        setCount(0);
        setDisabled(false);
        clearInterval(intervalId);
      }, 30000);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            Admin Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
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
                  onChange={hPassword}
                  disabled={disabled}
                  className="bg-gray-50 border  text-gray-900 text-sm  rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 placeholder-gray-400 ring-gray-300"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={adminLogin}
                disabled={disabled}
                className="flex w-full justify-center rounded-md bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {disabled ? `Wait ${30 - count}s` : "Login"}
              </button>
            </div>
          </form>
          <Link to="/login">
            <p className="mt-10 text-center text-sm text-gray-500">
              Not an Admin? LogIn here
            </p>
          </Link>
          <p className="mt-10 text-center text-sm text-black">
            Admin Means Owner of this Website.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AdminLogin;
