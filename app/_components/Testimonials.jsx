import {Badge} from "@/components/ui/badge";
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

                     </div>
        </>
    )
} 