import React, { useState } from "react";
import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { LuFileEdit } from "react-icons/lu";

const Navbar = () => {
  const [visibleBtnBuscar, setVisibleBtnBuscar] = useState(false);

  return (
    <nav className="navbar">
      <Link to={"/"} className="flex-none w-10">
        <img src={logo} className="w-full" />
      </Link>

      <div
        className={
          "absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show " +
          (visibleBtnBuscar ? "show" : "hide")
        }
      >
        <input
          type="text"
          placeholder="Buscar"
          className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12"
        />
        <FiSearch className="absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey" />
      </div>
      <div className="flex items-center gap-3 md:gap-6 ml-auto">
        <button
          className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center"
          onClick={() => setVisibleBtnBuscar((currentValue) => !currentValue)}
        >
          <FiSearch className="mt-0.5 text-xl" />
        </button>
        <Link to={"/editor"} className="hidden md:flex gap-2 link">
          <LuFileEdit className="mt-0.5" />
          <p>Write</p>
        </Link>
        <Link to={"/signin"} className="btn-dark py-2">
          Sign In
        </Link>
        <Link to={"/signup"} className="btn-ligth py-2 hidden md:block">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
