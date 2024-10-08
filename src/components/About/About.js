import Image from "next/image"
import Link from "next/link"
export default function About() {
    return(
        <div>
            

            <section  id="about">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
        <Link href={"https://github.com/brentgotte"} target={'_blank'}  className="mt-10"> <img src="/profile.jpg" alt="Brent Gotte" className="rounded-full" height={200} width={200} /></Link>
            <img src="https://readme-typing-svg.demolab.com?font=mont+serrat&size=25&duration=3500&pause=1000&color=FFFFFF&background=FF111100&repeat=false&width=500&lines=Hello%2C+I+am+Brent+G%C3%B6tte" alt="Typing SVG" />
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">We need space to do great things. ~ ISOLATION  </p>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I am a software engineer with a passion for learning new technologies. I am a fast learner and I am always looking for new challenges. I am a 4 time hackathon winner and I am always looking for new opportunities to learn and grow.</p>
            <Link href="https://www.linkedin.com/in/brent-gotte/" scroll={false} target={'_blank'} > 
            <p class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Contact me!
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </p></Link>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex" >
            <img src="/imagecode.png" alt="mockup" id="border"/>
        </div> 
    </div>
</section>
<div className="space-between-elements" />
        </div>
    )
}