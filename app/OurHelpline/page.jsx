import { FaPhone } from "react-icons/fa6";

export default function OurHelpline(){
    return(
        <div className="flex justify-center">
            <div className="m-2 p-2 bg-black/80 text-white lg:w-1/3 sm:full flex justify-center rounded hover:scale-125">
            <div className="flex justify-center  text-fuchsia-600 font-medium m-1 p-1 capitalize gap-x-4 ">
                <p className="text-2xl gap-x-4">our helpline contacts</p>
                <FaPhone className="h-6 w-6  text-green-400 "/>
            </div>
            <div className="flex justify-center ">
                
                <div className="text-2xl ">
                    <ul>
                        <li className="mt-1 mb-1 cursor-pointer hover:text-blue-500">+91-88322661xx </li>
                        <li className="mt-1 mb-1 cursor-pointer hover:text-blue-500">+91-86332661xx </li>
                        <li className="mt-1 mb-1 cursor-pointer hover:text-blue-500">+91-89352061xx </li>
                        
                        </ul>
                    </div>
                </div>
        </div>
        </div>
        
    )
}