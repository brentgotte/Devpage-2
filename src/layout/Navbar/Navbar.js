import Link from "next/link";
import React, { useRef } from 'react';
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
export default function Navbar() {
	return (
    <div>
      <nav class="  w-100 px-9">
        <div
          class="md:h-16 h-28  container flex items-center justify-between flex-wrap md:flex-nowrap backdrop-blur-md" id="color">
          <img
            src="https://readme-typing-svg.demolab.com?font=mont+serrat&size=25&duration=2000&pause=1000&color=6366F1&background=8496FF00&width=435&lines=Brent+Gotte%7C+Software+Developer;Software+Developer"
            alt="Typing SVG"
          />
          <div class="text-gray-500  order-2 ">
            <ul class="flex font-semibold justify-between">
              <li class="md:px-4 md:py-2 text-indigo-500">
                <Link href="#about" scroll={false}><p> About me</p></Link>
              </li>
              <li class="md:px-4 md:py-2 hover:text-indigo-400">
                <Link href="#portfolioscroll" scroll={false}> <p>My Portfolio</p></Link>
              </li>
              <li class="md:px-4 md:py-2 hover:text-indigo-400">
                <Link href="#contact" scroll={false}><p>Contact me!</p></Link>
              </li>
            </ul>
          </div>
          <div class="order-3">
			<Link href="mailto:brent.gotte@gmail.com">
            <button
              class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2"
              id="btn"
            >
              <BsFillEnvelopeOpenFill />
              <span>Email me!</span>
            </button>
			</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}