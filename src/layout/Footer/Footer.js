export default function Footer()   {
    return (
        <div>
       <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
        </a>
        
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <h1 className="text-white">Brent Gotte</h1>
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">©  <a>Brent Gotte</a>. All Rights Reserved. 
    </span> <br/> <br/> 
    <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400 justify-center">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Github</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">LinkedIn</a>
            </li>
            
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
</footer>
        </div>
    )
}