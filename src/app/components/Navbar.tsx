import React from "react";

export default function Navbar() {
  return (
    <div className="h-20 flex justify-between px-20 items-center font-semibold ">
      <div className="w-1/3 text-left">LOGO</div>
      <div className="w-1/3 flex justify-center">
        <ul className="flex space-x-8">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="w-1/3 flex justify-end">
        <button className="border-2 border-green-500 px-2 py-1 text-green-500 hover:bg-green-500 hover:border-green-500 hover:text-white duration-200">
          Start Contributing
        </button>
      </div>
    </div>
  );
}
