import React from 'react'
import { useState,useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Props {
    data:any[];
}

const ListCard:React.FC<Props> = ({data}) => {
  return (
    <div className='flex  flex-wrap gap-[10px] '>
          {/* {data.map((item,index) => (
                <div key={index}>
                    <img src={`https://image.tmdb.org/t/p/w500/${item.image || item.backdrop_path || item.poster_path }`} alt={item.title} width={300} height={400} />
                </div>
            ))} */}
        {/* <h2>
            {data.map((item,index) => (
                <div key={index}>
                    <img src={`https://image.tmdb.org/t/p/w500/${item.image || item.backdrop_path || item.poster_path }`} alt={item.title} width={200} height={300} />
                </div>
            ))}
        </h2> */}

<Swiper slidesPerView={5}
        slidesPerGroup={5}
        slidesPerGroupSkip={1}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        grabCursor={true}
        navigation={true}
       

        pagination={{ clickable: true }}
        speed={1000}
        breakpoints={{
          1000: {
            slidesPerView: 5,
            slidesPerGroup: 5
          },
          750: {
            slidesPerView: 4,
            slidesPerGroup: 4
          },
          0: {
            slidesPerGroup: 3,
            slidesPerView: 3
          },
        }}
        keyboard={{
          enabled: true,
        
        }}>

{data && data.map((item:any) => (
          <SwiperSlide key={item.id}>
            <div onClick={() => {
            //   setShowModal(true)
            //   setSelectedId(item.id)
            //   setSelectedTitle(item.original_title || item.title ||item.original_name || item.name)
            //   setDescription(item.overview || item.description)
            //   setDate(item.release_date || date)
            //   setRating(item.vote_average || item.rating)
            //   setImage(item.backdrop_path || item.poster_path || item.image)
            }}>
                   <img src={`https://image.tmdb.org/t/p/w500/${item.image || item.backdrop_path || item.poster_path }`} alt={item.title}  />
                </div>

</SwiperSlide>

))}

</Swiper>
    </div>
  )
}

export default ListCard