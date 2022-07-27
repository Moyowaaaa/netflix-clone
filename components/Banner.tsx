import React, { useEffect, useState } from 'react'
import { InformationCircleIcon } from '@heroicons/react/outline'
import { FaPlay } from 'react-icons/fa'


interface Props {
    popular:any[]
}

const Banner:React.FC = ({popular}) => {

    const [movie,setMovie] = useState<any | null>(null)

    useEffect(() => {
        setMovie(popular[Math.floor(Math.random() * popular.length)])
    },[popular])


    
  return (
    <div className='absolute top-16 h-[105vh] w-full flex flex-col ' >
        <div className='absolute w-full h-full'>
        <img src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}  alt={"poster"} className="w-full h-full" />
        </div>

        <div className='absolute bottom-40 left-6 flex flex-col gap-4 text-shadow-md '>
     <h1 className='text-6xl max-w-3xl drop-shadow-2xl'>{movie?.title || movie?.name || movie?.original_name}</h1>
     <p className='lg:max-w-2xl text-lg drop-shadow-2xl'>{movie?.overview}</p>
     <div className="flex space-x-3 z-10">
         <button className="bannerButton bg-white text-black rounded-sm">
           <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
           Play
         </button>
         <button
           className="bannerButton bg-[gray]/70"
         >
           <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" /> More Info
         </button>
         
     </div>

     
</div>
<div className="fade"></div>

    </div>
  )
}

export default Banner