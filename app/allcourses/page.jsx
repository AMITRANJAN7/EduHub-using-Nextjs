'use client'
import React from "react";
import Sdata from "@/app/_components/Sdata";
import Card from "@/app/_components/Card";

export default function allCourses(){
   // console.log('Sdata:', Sdata);

   

   return( 
    
   <div className="flex flex-wrap justify-center gap-6">
        
     { Sdata.map((val) =>{
    return(
        
        <div key={val.id}  className="flex justify-center items-center">
        <Card
          
        img={val.img}
        name={val.name}
        course={val.course}
        description={val.description}
        review={val.review}
        price={val.price}              
        />
    </div>
    );
})}
      


    </div>
 
   
   )  
}
    