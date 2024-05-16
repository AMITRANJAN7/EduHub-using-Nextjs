import {Badge} from "@/components/ui/badge";
//import { CircleCheck, MoveRight, Star } from "lucide-react";
import Carousels from "./Carousels"
import Link from "next/link";

export default function Testimonials (){
    return(
        <>
          <div className="container bg-gradient-to-tl from-fuchsia-200 to bg-slate-50">
             <div className="flex justify-center mt-3">
                        <Badge variant="outline" className ="text-red-500 outline-none border-none text-md">
                            Top Class Courses
                        </Badge>
              </div> 
                   <div className="flex justify-center items-center text-bold text-4xl text-extrabold ">
                        <h1 className="mt-1 ">
                            Explore the world's best <span className="text-pink-800">Courses</span> 
                        </h1>
                        
                    </div> 
                         <div className="flex justify-center items-center">
                         <div className=" lg:w-3/4 md:3/4 sm:full mx-6 p-4 flex justify-center rounded underline mt-6 text-blue-500 bg-fuchsia-200 font-semibold">
                            <ul className="flex gap-x-8">
                              <li className=" hover:text-pink-800 hover:underline cursor-pointer "> <Link href="/allcourses">All Courses</Link></li>
                              <li className=" hover:text-pink-800 hover:underline cursor-pointer"><Link href="/videotutorials">Video Tutorials</Link></li>
                              <li className=" hover:text-pink-800 hover:underline cursor-pointer"><Link href="/podcast">Podcast</Link></li>
                            </ul>
                          
                       </div> 
                      
                         </div>
                       <div className="flex justify-center">
                       <div className="flex justify-center items-center mx-2 p-2 bg-fuchsia-300 rounded font-medium capitalize lg:w-1/4 sm:full md:1/4 mt-3 text-2xl"> <h2 className="flex justify-center">our achivers</h2></div>
                        </div>  
                         <Carousels />
                         
                       

                        {/*<div className="m-2 p-2 flex bg-slate-400 justify-around">
                            
                            <div className="bg-white m-3 px-2 rounded">
                                <div className="mt-2  p-2">
                                <img src="/storytelling.jpg" alt="img" width={200} height={400}/>
                                <h1 className="flex justify-start m-2 text-sm ">Cyber-Security <span className="flex justify-end mx-2 "> <Star className="scale-50"/> (4.8 Reviews) </span> </h1>
                                </div>
                               <span className="flex flex-col text-blue-500">Fundamentals and applications <span className="text-gray-500 mt-4">by Dana Allision</span> </span>
                               <div className="flex justify-between">
                               <button className="flex justify-center mt-1 mb-1 px-1 rounded-md text-sm bg-blue-500 text-white hover:bg-red-400">Enroll Now<MoveRight className="scale-75"/></button>
                               <span className="text-red-600" >Rs.1250</span>
                               </div>
                              
                            </div>
                        </div>*/  }     
         </div>
        </>
    )
} 