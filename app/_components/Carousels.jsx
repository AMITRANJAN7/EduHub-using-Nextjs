'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

import { useEffect, useState } from 'react';

export default function Carousels() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check screen size on mount and on resize
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = isSmallScreen ? {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  } : {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };


  return (
    <div className='lg:w-3/4 md:full m-auto'>
      <div className="m-4 pb-8">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-white h-full text-black rounded-xl">
              <div className='h-56 bg-fuchsia-200 flex justify-center items-center rounded-t-xl'>
                <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold hover:text-fuchsia-500 hover:underline">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <button className='bg-fuchsia-500 text-white text-lg px-6 py-1 rounded-xl hover:text-black'>
                  <Link href="/allcourses">Enroll Now</Link>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );



 {/* return (
    <div className='lg:w-3/4 sm:full md:full m-auto'>
      <div className="m-4 pb-8">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="bg-white lg:h-[450px] sm:3/4 md:h-fit text-black rounded-xl">
            <div className='lg:h-56 sm:fit bg-fuchsia-200 flex justify-center items-center rounded-t-xl'>
              <img src={d.img} alt="" className="lg:h-44 lg:w-44 sm:w-fit sm:h-fit md:h-44 md:44 rounded-full"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold hover:text-fuchsia-500 hover:underline">{d.name}</p>
              <p className="text-center">{d.review}</p>
              <button className='bg-fuchsia-500 text-white text-lg px-6 py-1 rounded-xl hover:text-black'><Link href="/allcourses">Enroll Now</Link> </button>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
  );*/}
}

const data = [
  {
    name: `Yogendra Singh`,
    img: `/yogendra-singh.jpg`,
    review: `Inspirational storytelling techniques transformed my writing. Grateful for expert guidance and creativity boost!`
  },
  {
    name: `Abdallaa Alebrahim`,
    img: `/abdallaa-alebrahim.jpg`,
    review: `Built scalable applications under expert mentorship. Now equipped with advanced backend development knowledge.`
  },
  {
    name: `Victor Forgas`,
    img: `/viktor-forgacs.jpg`,
    review: `Overcame stage fright with public speaking lessons. Instructor's support boosted my confidence. Ready to shine.`
  },
  {
    name: `Emila-Der`,
    img: `/albert-der.jpg`,
    review: `Enhanced my frontend skills with practical projects. Instructor's expertise made learning enjoyable and rewarding.`
  },
  {
    name: `Kazi-Mizan`,
    img: `/kazi-mizan.jpg`,
    review: `Mastered video editing skills thanks to expert guidance. Ready to create professional-quality content.`
  },
  {
    name: `Yuvika Jones`,
    img: `/yuvika.jpg`,
    review: `Top-notch cybersecurity training. Now I'm confident in safeguarding digital assets. Highly recommended!`
  },
  
];

