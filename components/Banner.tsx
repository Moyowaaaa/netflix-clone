import React, { useEffect, useState } from 'react'
import { InformationCircleIcon } from '@heroicons/react/outline'
import { FaPlay } from 'react-icons/fa'
import InfoModal from "../components/InfoModal"
import {PopularProp} from "../utils/interfaces"




const Banner:React.FC<PopularProp> = ({popular}) => {
  const [showModal,setShowModal] = useState<boolean>(false);
  const [selectedId,setSelectedId] = useState<any>(null);
  const [image,setImage] = useState<any>(null);
  const [selectedTitle,setSelectedTitle] = useState<any>(null);
  const [rating,setRating] = useState<any>(null);
  const [date,setDate] = useState<any>(null);
  const [description, setDescription] = useState<any>(null)

    const [movie,setMovie] = useState<any | null>(null)

    useEffect(() => {
        setMovie(popular[Math.floor(Math.random() * popular.length)])
    },[popular])


    
  return (
    <div className='absolute top-16 h-[50vh] lg:h-[100vh] w-full flex flex-col object-cover ' >
        <div className='absolute w-full h-full'>
        <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}  alt={"poster"} className="w-full h-full" />
        </div>

        <div className='absolute bottom-6 left-2 lg:bottom-40 lg:left-6 flex flex-col gap-4 text-shadow-md '>
     <h1 className='text-3xl lg:text-6xl max-w-3xl drop-shadow-2xl'>{movie?.title || movie?.name || movie?.original_name}</h1>
     <p className='lg:max-w-2xl text-justify w-11/12 lg:w-full  text-xs lg:text-lg drop-shadow-2xl'>{movie?.overview}</p>
     <div className="flex space-x-3 z-10">
         <button className="bannerButton bg-white text-black rounded-sm">
           <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
           Play
         </button>
         <button
           className="bannerButton bg-[gray]/70"
           onClick={() => {
            setShowModal(true)
            setSelectedId(movie?.id)
            setSelectedTitle(movie?.title || movie?.name || movie?.original_name)
            setDescription(movie?.overview)
            setDate(movie?.release_date)
            setRating(movie?.vote_average)
            setImage(movie?.backdrop_path)
4           }}
         >

           <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" /> More Info
         </button>
         
     </div>

     
</div>
<div className="fade"></div>

{showModal &&  <InfoModal set={setShowModal} id={selectedId} title={selectedTitle} description={description} rating={rating} date={date} image={image}/> }



    </div>
  )
}

export default Banner