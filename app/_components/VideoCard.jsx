'use client'
import Link from 'next/link'
import ReactPlayer from 'react-player'
export default function VideoCard({name,course,url}){
    return(
    
        <div className="flex justify-center rounded">
    <div className="rounded-lg shadow-lg bg-white max-w-sm m-2 p-2">            
            <ReactPlayer url={url} width='350px' height='300px' controls={true} />
        <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{course}</h5>
            <p className="text-gray-700 text-base mb-4">
                {name}
            </p>
            <button type="button" className=" inline-block px-6 py-2.5 bg-fuchsia-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"><Link href="/allcourses">Enroll</Link></button>
        </div>
    </div>
</div>
        
    )
}


