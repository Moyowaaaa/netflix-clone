import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';



import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Props{
  title:string,
  data:any[]
}

const Row:React.FC<Props> = ({ data, title}) => {
  return (
    <div className='mb-6 z-50'>
      <p className='mt-2 mb-6 mx-4 pt-4 z-50'>{title}</p>
        <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={5}
        navigation={true}
        loop={true}
        grabCursor={true}
        spaceBetween={5}
        slidesPerGroup={5}
        slidesPerGroupSkip={1}
        pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      speed={1000}
        
        >
           {data && data.map((tv) => (
              <SwiperSlide key={tv.id} >
                <img  src={`https://image.tmdb.org/t/p/w500/${tv?.backdrop_path}`}  alt={`${tv?.name || tv?.original_name}`}  />
              </SwiperSlide>
              ))}
        </Swiper>

        
      
    </div>
  )

}

export default Row