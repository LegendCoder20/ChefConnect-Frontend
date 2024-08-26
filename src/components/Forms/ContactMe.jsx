import React, {useState, useRef} from "react";
import emailjs from "@emailjs/browser";
import HeaderTitle from "../Small Components/HeaderTitle";
import Navbar from "../Navbar";

function ContactMe() {
  const rName = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneNo] = useState("");
  const [query, setQuery] = useState("");

  const [toastVisible, setToastVisible] = useState(false);

  const hName = (e) => {
    setName(e.target.value);
  };

  const hEmail = (e) => {
    setEmail(e.target.value);
  };

  const hPhoneNo = (e) => {
    setPhoneNo(e.target.value);
  };

  const hQuery = (e) => {
    setQuery(e.target.value);
  };

  const submitData = (e) => {
    e.preventDefault();
    let data = {name, email, phoneno, query};
    emailjs
      .send("aryan_ma", "template_54fhpde", data, "oIzrqXv28iYKjToUc")
      .then(() => {
        setToastVisible(true);

        setName("");
        setEmail("");
        setPhoneNo("");
        setQuery("");
        setTimeout(() => setToastVisible(false), 2500);
      })
      .catch((err) => {
        alert("Failed to submit form. Please try again later.");
      });
  };

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="text-center font-bold text-4xl mt-4">
        <h1>
          <b>Contact Us</b>
        </h1>
      </div>
      <div className="container mx-auto mt-4 p-4 lg:w-96">
        <form className="space-y-4 " onSubmit={submitData}>
          <div className="flex flex-col">
            <label htmlFor="validationDefault01" className="font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              className="border border-gray-300 p-2 rounded"
              id="validationDefault01"
              placeholder="Enter your Name"
              ref={rName}
              value={name}
              onChange={hName}
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="validationDefaultUsername"
              className="font-medium mb-1"
            >
              E-mail
            </label>
            <div className="flex">
              <span
                className="inline-flex items-center px-3 bg-gray-200 border border-r-0 border-gray-300 rounded-l"
                id="inputGroupPrepend2"
              >
                @
              </span>
              <input
                type="email"
                className="border border-gray-300 p-2 rounded-r w-full"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                placeholder="Enter your E-mail"
                value={email}
                onChange={hEmail}
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="validationDefault03" className="font-medium mb-1">
              Phone Number
            </label>
            <div className="flex">
              <span
                className="inline-flex items-center px-3 bg-gray-200 border border-r-0 border-gray-300 rounded-l"
                id="inputGroupPrepend2"
              >
                +91
              </span>
              <input
                type="number"
                className="border border-gray-300 p-2 rounded-r w-full"
                id="validationDefault03"
                placeholder="Enter your Phone-no"
                value={phoneno}
                onChange={hPhoneNo}
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="font-medium mb-1"
            >
              Query
            </label>
            <textarea
              className="border border-gray-300 p-2 rounded resize-none"
              id="exampleFormControlTextarea1"
              placeholder="Enter your Query"
              rows="3"
              value={query}
              onChange={hQuery}
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-2 px-4 rounded "
              type="submit"
            >
              Submit form
            </button>
          </div>
        </form>

        {/*  */}
        {toastVisible && (
          <div className="fixed bottom-4 right-4 z-[1000] transform transition-all duration-500 ease-in-out opacity-100">
            <div
              className="flex items-center w-full max-w-xs p-2 space-x-3 bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 border border-blue-600 text-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              role="alert"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                <svg
                  className="w-5 h-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10l9 9L21 4"
                  />
                </svg>
              </div>
              <div className="pl-2 text-sm font-medium">
                Message Sent Successfully!
              </div>
            </div>
          </div>
        )}

        {/*  */}
      </div>
    </React.Fragment>
  );
}

export default ContactMe;
