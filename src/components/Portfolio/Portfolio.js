import {BsArrowDown} from "react-icons/bs";
import Link from "next/link";

export default function Portfolio() {
    return(
        <div>
            {/* make an container with 3 rows */}

            <h1 className="text-white text-5xl text-center"  id="portfolioscroll">My Portfolio</h1> <br></br>
            <h1 className="text-white text-2xl text-center ">Here are some of my projects ↓</h1> <br></br>
            
            <div class="grid grid-cols-3 gap-4 justify-center ml-14">
                {/* make a cardf with image 3 next to each other */}
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="/valley.png" alt="mockup" id="border"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-white">Valley Of Despair</div>
                        <p class="text-white text-base">
                        One week project for school with 4 friends. Goal: Learning NextJS
                        </p>
                        <Link href="https://github.com/I-am-Lemuel/valley-of-despair"> 
                        <button class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-4">Check the repo here!</button>
                        </Link>
                        </div>
                        </div>
                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="/imagecode.png" alt="mockup" id="border"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-white">Globadyme</div>
                        <p class="text-white text-base">
                            Made a website for Globadyme with Next.js and Bootstrap.
                        </p>
                        </div>
                        </div>
                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="/imagecode.png" alt="mockup" id="border"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-white">Globadyme</div>
                        <p class="text-white text-base">
                            Made a website for Globadyme with Next.js and Bootstrap.
                        </p>
                        </div>
                        </div>

           
        </div>
  


        </div>  
    )
}