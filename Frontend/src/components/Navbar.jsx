import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

 // 1. Ensure the theme is set on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const element = document.documentElement;

    if (savedTheme === "dark") {
      element.classList.add("dark");
      element.setAttribute("data-theme", "dark");
    } else {
      element.classList.remove("dark");
      element.setAttribute("data-theme", "light");
    }
  }, []); // Empty dependency array = runs once on load

  // 2. This handles the actual toggle when you click the button
  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      element.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      element.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/course">Course</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
        
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );

  return (
    <div
      className={`navbar max-w-screen-2xl mx-auto  px-4 md:px-15 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 ${
        sticky
          ? "sticky-navbar shadow-2xl bg-base-200  dark:bg-slate-900 dark:text-white duration-300 transition-all ease-in-out"
          : ""
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>

        <a className=" text-2xl font-bold cursor-pointer">BookStore</a>
      </div>

      <div className="navbar-end gap-4 flex-nowrap">
        <ul className="menu menu-horizontal px-1 hidden lg:flex whitespace-nowrap">
          {navItems}
        </ul>
        <div className="hidden md:block">
          <label className="input flex items-center gap-2 w-48 h-10 border border-gray-300 focus-within:outline-none focus-within:ring-0  focus-within:border-gray-300 transition-none">
            <svg
              className="w-3 h-5 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20 L16 16" />
            </svg>

            <input
              type="search"
              placeholder="Search..."
              className="grow focus:outline-none focus:right-0 "
            />
          </label>
        </div>
        <button
  onClick={() => {
    setTheme(theme === "light" ? "dark" : "light");
  }}
  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
>
  {/* Logic Reversed: Show Sun when LIGHT, Moon when DARK */}
  {theme === "light" ? (
    // ☀️ Sun Icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  ) : (
    // 🌙 Moon Icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1111.21 3c.34 0 .67.02 1 .05A7 7 0 0021 12.79z"
      />
    </svg>
  )}
</button>
        <a className="btn bg-black text-white px-3 py-1 rounded-md hover:g-slate-800 duration-300 cursor-pointer"
        onClick={()=> 
          document.getElementById("my_modal_3").showModal()}>
          Login
          </a>
          <Login />
      </div>
    </div>
  );
}

export default Navbar;
