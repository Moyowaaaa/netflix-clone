import React from 'react'
import { useState,useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import InfoModal from './InfoModal';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Props {
    data:any[];
}

const ListCard:React.FC<Props> = ({data}) => {
    const [showModal,setShowModal] = useState<boolean>(false);
    const [selectedId,setSelectedId] = useState<any>(null);
    const [image,setImage] = useState<any>(null);
    const [selectedTitle,setSelectedTitle] = useState<any>(null);
    const [rating,setRating] = useState<any>(null);
    const [date,setDate] = useState<any>(null);
    const [description, setDescription] = useState<any>(null)


  return (
    <div className='flex  flex-wrap gap-[10px] '>
          {data.map((item,index) => (
                <div key={index} 
                onClick={() => {
              setShowModal(true)
              setSelectedId(item.id)
              setSelectedTitle(item.original_title || item.title ||item.original_name || item.name)
              setDescription(item.overview || item.description)
              setDate(item.release_date || date)
              setRating(item.vote_average || item.rating)
              setImage(item.backdrop_path || item.poster_path || item.image)
            }}>
                    <img src={`https://image.tmdb.org/t/p/original/${item.image || item.backdrop_path || item.poster_path }`} alt={item.title} width={300} height={400} />
                </div>
            ))}

{showModal && <InfoModal set={setShowModal} id={selectedId} title={selectedTitle} description={description} rating={rating} date={date} image={image}/> }
    </div>
  )
}

export default ListCard