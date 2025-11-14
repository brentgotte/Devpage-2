import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div>
      <nav className="w-100 px-9">
        <div
          className="md:h-16 h-28 container flex items-center justify-between flex-wrap md:flex-nowrap backdrop-blur-md"
          id="color"
        >
          <img
            src="https://readme-typing-svg.demolab.com/?font=mont+serrat&size=25&duration=2000&pause=1000&color=fe8e06&background=8496FF00&width=435&lines=Brent+Gotte;Software+Developer"
            alt="Typing SVG"
          />
          <div className="text-gray-500 order-2 flex justify-center w-full md:w-auto">
            <ul className="flex font-semibold justify-center space-x-8">
              <li className="md:px-4 md:py-2">
                <Link href="#about" scroll={false} className="focus:text-primary">
                  <p>About me</p>
                </Link>
              </li>
              <li className="md:px-4 md:py-2">
                <Link href="#portfolioscroll" scroll={false} className="focus:text-primary">
                  <p>My Portfolio</p>
                </Link>
              </li>
              <li className="md:px-4 md:py-2 visited:text-indigo-400">
                <Link href="#resume" scroll={false} className="focus:text-primary">
                  <p>Resume</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="order-3">
            <Link href="https://github.com/brentgotte">
              <button
                className="px-4 py-2 bg-primary text-black rounded-xl flex items-center gap-2"
                id="btn"
              >
                <FaGithub />
                <b>Github</b>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
