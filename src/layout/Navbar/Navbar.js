import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
export default function Navbar() {
	return (
    <div>
      <nav class="w-100 px-9">
        <div
          class="md:h-16 h-28  container flex items-center justify-between flex-wrap md:flex-nowrap backdrop-blur-md" id="color">
          <img
            src="https://readme-typing-svg.demolab.com/?font=mont+serrat&size=25&duration=2000&pause=1000&color=fe8e06&background=8496FF00&width=435&lines=Brent+Gotte|+Software+Developer;Software+Developer"
            alt="Typing SVG"
          />
          <div class="text-gray-500  order-2 ">
            <ul class="flex font-semibold justify-between">
              <li class="md:px-4 md:py-2" >
                <Link href="#about" scroll={false} className="focus:text-primary" ><p> About me</p></Link>
              </li>
              <li class="md:px-4 md:py-2">
                <Link href="#portfolioscroll" scroll={false}className="focus:text-primary"> <p>My Portfolio</p></Link>
              </li>
              <li class="md:px-4 md:py-2 visited:text-indigo-400">
                <Link href="#contact" scroll={false} className="focus:text-primary"><p>Contact me!</p></Link>
              </li>
            </ul>
          </div>
          <div class="order-3">
			<Link href="mailto:brent.gotte@gmail.com">
            <button
              class="px-4 py-2 bg-primary text-black rounded-xl flex items-center gap-2"
              id="btn"
            >
               <FaGithub />
              <b>Github </b>
            </button>
			</Link>
          </div>
        </div>
      </nav>


    </div>
  );
}
