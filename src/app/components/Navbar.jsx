import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="shadow-gray-500  w-full bg-white shadow-md flex flex-row flex-wrap justify-evenly items-center">
      <figure>
        <a href="/">
          <img
            src="/img/Talm.png"
            alt="TALM Logo"
            className="h-16 mx-10 my-2"
          ></img>
        </a>
      </figure>
      <div className="hover:text-[#8D2E37] hover:font-bold">
        <a href="/">About</a>
      </div>
      <div className="hover:text-[#8D2E37] hover:font-bold">
        {" "}
        <a href="/">Contact</a>
      </div>
      <div className="hover:text-[#8D2E37] hover:font-bold">
        {" "}
        <a href="/">My Travels</a>
      </div>
      <div className="hover:text-[#8D2E37] hover:font-bold">
        {" "}
        <a href="/">Trip Planning</a>
      </div>
      <div className="hover:text-[#8D2E37] hover:font-bold">
        <a href="/">Touris Sites</a>
      </div>
      <div>
        <Link href="/signUp">
          <button className="rounded-full bg-[#180800] text-white px-4 py-2 hover:bg-[#180800c8]">
            SignUp
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
