import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import InfoModal from './InfoModal';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Props{
  title?:string,
  data:any[],

}

const Row:React.FC<Props> = ({ data, title}) => {
  const [showModal,setShowModal] = useState<boolean>(false);
  const [selectedId,setSelectedId] = useState<any>(null);
  const [image,setImage] = useState<any>(null);
  const [selectedTitle,setSelectedTitle] = useState<any>(null);
  const [rating,setRating] = useState<any>(null);
  const [date,setDate] = useState<any>(null);
  const [description, setDescription] = useState<any>(null)




  return (
    <div className='mb-6 '>
      <h2 className='py-4 pl-2'>{title}</h2>
      <Swiper slidesPerView={5}
        slidesPerGroup={5}
        slidesPerGroupSkip={1}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        grabCursor={true}
        navigation={true}
       
        loop={true}
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
              setShowModal(true)
              setSelectedId(item.id)
              setSelectedTitle(item.original_title || item.title ||item.original_name || item.name)
              setDescription(item.overview || item.description)
              setDate(item.release_date || date)
              setRating(item.vote_average || item.rating)
              setImage(item.backdrop_path || item.poster_path || item.image)
            }}>
          <img  src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path || item?.image}`}  alt={`${item?.name || item?.title || item?.original_name}`}  />
          </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showModal && <InfoModal set={setShowModal} id={selectedId} title={selectedTitle} description={description} rating={rating} date={date} image={image}/> }


    </div>
  )

}

export default Row