import { BsArrowDown } from "react-icons/bs";
import Link from "next/link";

export default function Portfolio() {
    return (
        <div id="portfolioscroll">

            <h1 className="text-white text-5xl text-center" >My Portfolio</h1> 
            <h1 className="text-white text-2xl text-center ">Here are some of my projects </h1> 
            <h1 className="text-white text-2xl text-center ">↓</h1> <br></br> 
            <div class="grid grid-cols-3 gap-14 " id="flex" >
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="/index.png" alt="mockup" id="border" />
                    <div class="mt-4">
                        <div class="font-bold text-xl mb-2 text-white">Valley Of Despair</div>
                        <p class="text-white text-base">
                            One week project for school with 4 friends. Goal: Learning NextJS
                        </p>
                        <Link href="https://github.com/I-am-Lemuel/valley-of-despair" target={"_blank"}>
                        <button class="mt-4 text-black bg-primary hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-">Check the repo here!</button>
                        </Link>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="/payment.jpeg" alt="mockup" id="border" />
                    <div class="mt-4">
                        <div class="font-bold text-xl mb-2 text-white">Globadyme</div>
                        <p class="text-white text-base">
                            Made a website for Globadyme with Next.js and Bootstrap.
                        </p>
                        <Link href="https://github.com/I-am-Lemuel/DeepDiveMKB2" target={"_blank"}>
                        <button class="mt-4 text-black bg-primary hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-">Check the repo here!</button>
                        </Link>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-64 h-64" src="/imagecode.png" alt="mockup" id="border" />
                    <div class="mt-4">
                        <div class="font-bold text-xl mb-2 text-white">Transaction-tracker</div>
                        <p class="text-white text-base">
                            I made a transaction Tracker with Javascript. Goal: Learn to work with Javascript classes</p>
                        <Link href="https://github.com/brentgotte/Transaction-Tracker" target={"_blank"}>
                            <button class="mt-4 text-black bg-primary hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-">Check the repo here!</button>
                        </Link>
                    </div>
                </div>
            </div>
            


        </div>




    )
}