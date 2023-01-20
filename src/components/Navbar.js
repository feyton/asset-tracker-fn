import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="mt-0 pt-0">
      <div className="flex flex-row px-5 justify-center gap-10 h-10 bg-gray-300 items-center font-bold ">
        <Link className="hover:text-blue-300" to={"/"}>
          Home
        </Link>

        <Link className="hover:text-blue-300" to={"/assets"}>
          Assets
        </Link>

        <Link className="hover:text-blue-300" to={"/tracker"}>
          Tracker
        </Link>
      </div>
    </div>
  );
}
