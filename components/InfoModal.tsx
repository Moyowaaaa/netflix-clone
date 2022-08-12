import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addItem,removeItem } from '../redux/myListSlice';
import { PlusIcon } from '@heroicons/react/outline';



interface Props {
  set:any
  id:number;
  title:string,
  rating:number,
  description:string,
  date:string | number | any,
  image:any 
}

const InfoModal:React.FC<Props> = ({set,id, title, description, rating, date, image}) => {
  const dispatch = useDispatch();

  const data = {id, title, description, rating, date, image}


  const handleAdd = () => {
    dispatch(addItem(data))
    localStorage.setItem("my list", data)
  }
  


  return (
    <div className='modal-main rounded-lg'>
      <div className='modal-background h-[25rem] w-full '  style = {image !== null ? {backgroundImage: `url(https://image.tmdb.org/t/p/w500/${image})`} : {backgroundImage: `url(/fallback.jpeg)`}}>
      <p className='w-[3rem] h-[3rem] rounded-full right-0 absolute py-4 mt-2 flex items-center justify-center cursor-pointer mr-4 bg-[black]' onClick={() => {
            set(false)
        }}>X</p>
         <div className='pl-4 absolute bottom-56 '>
        <p className=' text-2xl lg:text-5xl z-50'>{title}</p>

</div>
      
        

       
      </div>
      <div className='w-full  h-[10rem]  flex flex-col pl-4 gap-4'>
        <div className='flex items-center gap-6'>
      <small className='text-[#46d369] text-lg'>{rating}/10</small>

      <small className='text-lg'>{date?.slice(0, 4)}</small>
      </div>

      <p className='text-xs w-11/12 text-justify lg:text-left lg:text-sm lg:w-11/12'>{description}</p>

      <button className='flex'onClick={handleAdd} >Add</button>
      </div>
    </div>
  )
}

export default InfoModal