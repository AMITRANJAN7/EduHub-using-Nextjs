import {Badge} from "@/components/ui/badge";
import { MoveRight } from "lucide-react";



export default function Banner (){
    return(
        <>
         <div className="container bg-gradient-to-tl from-fuchsia-200 to bg-slate-50">
            <div className="container">
                <div className="gap-8 grid grid-cols-2 items-center ">
                    <div className="mt-3">
                        <Badge variant="outline" className ="text-red-500 outline-none border-none text-md ">
                            Feed your knowledge
                        </Badge>
                        <h1 className="text-5xl font-bold ">Develope your skills with online <span className="text-pink-800">courses</span> </h1>
                        <p className="py-4 text-justify"> 
                        "Elevate your expertise with online courses. 
                         Feed your knowledge and develop essential skills 
                         through engaging content, expert instruction, and 
                         interactive learning experiences. Unlock new 
                         opportunities and advance your career with our 
                         comprehensive range of courses tailored to your 
                         interests and goals."
                      </p>
                      <button className="bg-fuchsia-500 text-white text-lg px-6 py-1 rounded-xl  inline-flex items-center justify-center hover:text-black ">Contact Us<MoveRight className="mt-0.5 mx-1"/></button>
                    </div>
                    <div>
                        <img src="./logohero.png" className="w-fit mt-2" alt="banner" width={600} height={600}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}