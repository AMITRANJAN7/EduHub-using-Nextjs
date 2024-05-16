import {Badge} from "@/components/ui/badge";
import { CircleCheck, MoveRight } from "lucide-react";



export default function Banner (){
    return(
        <>
        <div className="container mt-3 bg-gradient-to-tl from-fuchsia-200 to bg-slate-50">
            <div className="container">
                <div className="gap-8 grid grid-cols-2 items-center ">
                    
                    <div>
                        <img src="./abus.png" className="w-fit mt-2" alt="banner" width={600} height={600}/>
                    </div>

                    <div className="mt-3">
                        <Badge variant="outline" className ="text-red-500 outline-none border-none text-md">
                        What we are
                        </Badge>
                        <h1 className="text-5xl font-bold ">Learn & grow your <span className="text-pink-800">skills</span> from anywhere </h1>
                        <p className="py-4 text-justify">Your gateway to learning and growth from anywhere.
                         Explore and enhance your skills through accessible online education
                          tailored to your needs. Empower yourself with flexible learning options
                           and unlock new opportunities wherever you are.
                      </p>
                      <ul className="flex flex-col  gap-y-4">
                        <li className="flex gap-x-3 font-semibold "> <CircleCheck className="bg-fuchsia-500 rounded-full "/> Commitment to excellence</li>
                        <li className="flex gap-x-3 font-semibold "> <CircleCheck className="bg-fuchsia-500 rounded-full "/> Collaborative culture</li>
                        <li className="flex gap-x-3 font-semibold "> <CircleCheck className="bg-fuchsia-500 rounded-full "/> Adaptibility and innovation</li>
                        <li className="flex gap-x-3 font-semibold "> <CircleCheck className="bg-fuchsia-500 rounded-full "/> Continuous learning</li>
                        <li className="flex gap-x-3 font-semibold "> <CircleCheck className="bg-fuchsia-500 rounded-full "/> Career Advancement</li>
                        <li className="flex gap-x-3 font-semibold "> <CircleCheck className="bg-fuchsia-500 rounded-full "/> Entrepreneurial Growth</li>
                        <li className="flex gap-x-3 font-semibold "> <CircleCheck className="bg-fuchsia-500 rounded-full "/> Skill Diversification</li>
                      </ul>
                      <button className="bg-fuchsia-500 text-white text-lg px-6 py-1 rounded-xl mt-4 m-2.5 inline-flex items-center justify-center hover:text-black ">Learn more <MoveRight className="mt-0.5 mx-1"/></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}