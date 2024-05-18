'use client'



  
  export default function Example() {
    return (
      <div className="  bg-gradient-to-tl from-fuchsia-100 to bg-slate-50 m-4 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our top Faculties</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Our esteemed team comprises industry experts and academics dedicated to shaping tomorrow's leaders.
            With diverse expertise and a passion for education, they empower students through innovative teaching methods.
            Get inspired and learn from the best at our institution.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.img} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.course}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  const people = [
    {
      id:1,   
      img:"./jonathon.jpg",
      name:"Jonathon Ricks" ,
      course:"Film-Making",
       
     },
     {
      id:2,   
      img:"./abbie.png",
      name:"Abbie Emmons" ,
      course:"Story Writing",
      
     },
     {
      id:3,   
      img:"https://media.istockphoto.com/id/177383755/photo/indian-businessman.jpg?s=2048x2048&w=is&k=20&c=dh6YSpPP9ZRpOjmmGrsNugYj2mpXj4KcuDLYG6sGgPU=",
      name:"Anirudh R" ,
      course:"Cybersecurity",
       
     },
     {
      id:4,   
      img:"./angela.jpg",
      name:"Angela Green" ,
      course:"Video-Editing",
       
     },
     {
      id:5,   
      img:"./storytelling.jpg",
      name:"Jay Lippman" ,
      course:"Public Speaking",
      
     },
     {
      id:6,   
      img:"./gurmeet.jpg",
      name:"Gurmeet Singh" ,
      course:"Backend Development",
      
     },
     {
      id:7,   
      img:"./dorothy-jones.jpg",
      name:"Lily Jane" ,
      course:"Frontend Development",
      
     },
    
  ]
  