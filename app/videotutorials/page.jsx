'use client'
import React from "react";
import Sdata from "../_components/Sdata";
import VideoCard from "@/app/_components/VideoCard";


export default function videotutorials(){

   return( 
    
      <div className="flex flex-wrap justify-center gap-6">
           
        { Sdata.map((val) =>{
       return(
           
           <div key={val.id} className="flex justify-center items-center">
           <VideoCard
              
           name={val.name}
           course={val.course}
            url={val.url}             
           />
       </div>
       );
   })}
         
   
   
       </div>
    
      
      )  
   }
       
    