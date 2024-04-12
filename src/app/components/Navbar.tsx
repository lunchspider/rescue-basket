import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="h-20 flex justify-between px-20 items-center font-semibold fixed top-0 right-0 z-50 left-0">
      <div className="w-1/3 text-left">
        <Image
          src={"/logo.svg"}
          height={80}
          width={80}
          className=""
          alt="logo"
        />
      </div>
      <div className="w-1/3 flex justify-center">
        <ul className="flex space-x-8">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/"}>
            <li>About</li>
          </Link>
          <Link href={"/"}>
            <li>Contact</li>
          </Link>
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
