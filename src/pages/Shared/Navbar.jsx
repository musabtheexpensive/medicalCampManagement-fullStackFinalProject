import React, { useContext, useState } from "react";
import logo from "../../assets/6508184.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../../Providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);

  const handleImageClick = () => {
    setShowLogout((prev) => !prev);
  };
  const handleSignOut = () => {
    logOut()
      .then(() => console.log("user logged out successfully"))
      .catch((error) => console.error(error));
      setShowLogout(false)
  };
  // const variants = {
  //   open: { opacity: 1, x: 0 },
  //   closed: { opacity: 0, x: "-100%" },
  // };
  const navOptions = (
    <>
      <li>
        <Link
          to="/"
          className="block text-black lg:text-yellow-100 py-2 px-3 md:p-0 w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/availableCamp"
          className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          AvailableCamp
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/profile"
          className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          DashBoard
        </Link>
      </li>
      <li>
        <Link
          to="/contactUs"
          className="block text-black lg:text-yellow-100 py-2 px-3 md:p-0 w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
        >
          ContactUs
        </Link>
      </li>
    </>
  );
  return (
    <motion.nav>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div className="flex lg:mr-40 justify-center">
            <div className="w-1/4 ">
              <img src={logo} alt="" />
            </div>
            <div className="lg:animate-ping lg:mt-3 ">
              <a className="bg-gradient-to-r from-red-400 hover:from-pink-500 hover:to-yellow-500 normal-case text-3xl">
                MediCo
              </a>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 text-lg font-bold">
            {navOptions}
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="flex justify-center mr-2 gap-2">
                 <div className="mt-2">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-red-500 text-transparent bg-clip-text animate-bounce">
                  {user.displayName}
                </h3>
              </div>
              <div
                className="w-14 rounded-full overflow-hidden cursor-pointer"
                onClick={handleImageClick}
              >
                <img src={user.photoURL} alt="" className="w-full h-full" />
              </div>
           
              {showLogout && (
            <div className="absolute top-14 right-0 z-50  shadow-md p-4 rounded-lg ">
              <div className=" p-4 rounded-lg">
                <button
                  onClick={handleSignOut}
                  className="btn btn-xs sm:btn-sm md:btn-md btn-active text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                >
                  LogOut
                </button>
               
              </div>
            </div>
          )}
        </div>
          ) : (
            <div className="flex justify-between gap-3">
              <Link
                to="/login"
                className="btn btn-error w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
              >
                LogIn
              </Link>
              <Link
                to="/signUp"
                className="btn   md:btn-md btn-active text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                SignUp
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
