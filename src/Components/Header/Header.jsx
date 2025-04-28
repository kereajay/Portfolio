import React, { useState, useEffect } from "react";
import { IoSunnySharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import ajay from "../../assets/Images/ajay.png";

function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handletheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`shadow-md sticky top-0 z-50 transition-colors duration-500 ${
        theme === "dark" ? "bg-white" : "bg-black"
      }`}
    >
      {/* Desktop Nav */}
      <div className="hidden lg:flex justify-between items-center px-6 py-4 transition-all duration-500">
        <div className="flex  items-center gap-4">
          <img
            src={ajay}
            alt="Ajay"
            className="w-12 h-12 rounded-full border-2 border-purple-500"
          />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            AJAY
          </h1>
        </div>
        <ul className="flex gap-10 text-xl font-semibold transition-all duration-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          <li className="hover:text-indigo-500 transition">
            <Link to="/AboutMe">About Me</Link>
          </li>
          <li className="hover:text-indigo-500 transition">
            <Link to="/Education">Education</Link>
          </li>
          <li
            onClick={handletheme}
            className="cursor-pointer text-yellow-400 transition"
          >
            <IoSunnySharp size={24} />
          </li>
        </ul>
      </div>

      {/* Mobile Header */}
      <div className="flex justify-between items-center px-4 py-3 lg:hidden  dark:bg-white">
        <div className="flex items-center gap-3">
          <img
            src={ajay}
            alt="Ajay"
            className="w-10 h-10 rounded-full border-2 border-purple-500"
          />
          <h1 className="text-xl font-bold bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            AJAY
          </h1>
        </div>

        {/* Hamburger/Cross Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="relative w-8 h-8 flex flex-col justify-between items-center"
        >
          <span
            className={`w-8 h-[3px] rounded-full transition-transform duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-[10px]" : ""
            }`}
            style={{
              background:
                "linear-gradient(to right, #6366f1, #a855f7, #ec4899)",
            }}
          ></span>
          <span
            className={`w-8 h-[3px] rounded-full transition-all duration-300 ease-in-out ${
              open ? "opacity-0" : ""
            }`}
            style={{
              background:
                "linear-gradient(to right, #6366f1, #a855f7, #ec4899)",
            }}
          ></span>
          <span
            className={`w-8 h-[3px] rounded-full transition-transform duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-[10px]" : ""
            }`}
            style={{
              background:
                "linear-gradient(to right, #6366f1, #a855f7, #ec4899)",
            }}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden animate-slide-down">
          <ul className="flex flex-col items-start px-6 py-4 gap-5 bg-black/70 dark:bg-white/80 backdrop-blur-md rounded-b-xl">
            <li>
              <Link
                to="/AboutMe"
                onClick={() => setOpen(false)}
                className="text-lg font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/Education"
                onClick={() => setOpen(false)}
                className="text-lg font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                Education
              </Link>
            </li>
            <li
              onClick={() => {
                handletheme();
                setOpen(false);
              }}
              className="cursor-pointer flex items-center gap-2 text-lg font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              <IoSunnySharp size={22} className="text-yellow-400"/> 
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
