import { useState } from "react";

import { Collapse, Navbar, NavbarToggler, Container } from "reactstrap";
import { MdOutlineDateRange } from "react-icons/md";
import "./styles.css";

const NavbarTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const storedUserData = JSON.parse(localStorage.getItem("user"));
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar expand="lg" className="mb-3 shadow custom-navbar">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Container>
            <form className="flex items-center">
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="voice-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 w-full"
                  placeholder="Search Mockups, Logos, Design Templates..."
                  required
                />
              </div>
            </form>
          </Container>

          <div className="flex justify-center items-center">
            <div
              onClick={toggleDropdown}
              className={`relative border-b-4 border-transparent  ${
                open
                  ? "border-indigo-700 transform transition duration-300"
                  : ""
              }`}
            >
              <div className="flex justify-center items-center space-x-3 cursor-pointer">
                <MdOutlineDateRange />
                <span className="flex-grow flex flex-col ">
                  <span className="text-xs text-gray-900">
                    {storedUserData?.name}
                  </span>
                  <span className="text-gray-400 text-xs  mt-0.5 text-right">
                    {storedUserData?.role}
                  </span>
                </span>
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                  <img
                    src="https://github.com/mdo.png"
                    alt="hugenerd"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {open && (
                <div className="absolute w-32 px-3 py-2 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent">
                  <a
                    href="#"
                    className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600"
                  >
                    <div className="text-red-600">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    </div>
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavbarTop;
