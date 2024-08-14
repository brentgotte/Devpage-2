import { IoIosTime } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

export default function ResumeCard ( { name, date, location, description } )
 {
    return(
        <div className="max-w-sm   shadow-lg mr-10">
                    <img className=" bg-white w-full" src={ `/${name}.png `} id="border"   />
                    <div className="mt-4">
                        <div className=" flex flex-row  ">
                        <p className="font-bold text-xl mb-2 text-white">{name} </p>
                      

                        <div className=" flex flex-col mb-5 ml-20">

                        <div className=" flex flex-row">
                        <p className=" text-white mt-1  "><IoIosTime width={32} color="gray" /> </p>
                        <p className="text-gray-500"> {date} </p> 
                        </div>

                        <div className=" flex flex-row">
                        <p className=" text-white mt-1  "><MdLocationPin width={32} color="gray" /> </p>
                        <p className="text-gray-500"> {location} </p> 
                        </div>


                         
                        </div>                
                        </div>
                        <p class="mb-4 text-lg font-normal text-gray-500"> {description} </p>
                    </div>
                </div>
    )
}