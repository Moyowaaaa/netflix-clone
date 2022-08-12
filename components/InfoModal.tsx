import React, { useEffect,useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addItem,removeItem } from '../redux/myListSlice';
import { PlusIcon } from '@heroicons/react/outline';
import { InformationCircleIcon } from '@heroicons/react/outline'
import { FaPlay, FaCheck } from 'react-icons/fa'



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
  const list = useSelector((state:any) => state.myList)
  const [added,setAdded] = useState<boolean>(false);


  useEffect(() => {
    let existingList = list.list.map((item:any) => item.id)
    if(existingList.includes(id)){
      setAdded(true)
    }else{
      setAdded(false)
    }
  } ,[list.list])

  const handleAdd = () => {
    if(!added){
      dispatch(addItem(data))
    }
    else{
      dispatch(removeItem({id}))
    }
  }
  


  return (
    <div className='modal-main rounded-lg'>
      <div className='modal-background h-[25rem] w-full '  style = {image !== null ? {backgroundImage: `url(https://image.tmdb.org/t/p/w500/${image})`} : {backgroundImage: `url(/fallback.jpeg)`}}>
      <p className='w-[3rem] h-[3rem] rounded-full right-0 absolute py-4 mt-2 flex items-center justify-center cursor-pointer mr-4 bg-[black]' onClick={() => {
            set(false)
        }}>X</p>
         <div className='pl-4 absolute bottom-48 '>
        <p className=' text-2xl lg:text-5xl z-50'>{title}</p>
        <div className='flex gap-2 my-2'>
        <button className="bannerButton bg-white text-black rounded-sm">
           <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
           Play
         </button>
         
         {/* <button className='flex items-center justify-center border-2 rounded-full p-2' onClick={() => dispatch(removeItem(id))}>
            {added ? <FaCheck className='h-4 w-4 text-black md:h-7 md:w-7' /> : <PlusIcon className='h-4 w-4 text-black md:h-7 md:w-7' />}
         </button> */}

         <button className={`flex items-center justify-center border-2 rounded-full p-2 ${added? 'hidden' :'flex'}`} onClick={handleAdd}>
         <PlusIcon className='h-4 w-4 text-white md:h-7 md:w-7' />
         </button>

         <button onClick={handleAdd} className={` flex items-center justify-center border-2 rounded-full p-2 ${added? 'flex' :'hidden'}`}>
         <FaCheck className='h-4 w-4 text-white md:h-7 md:w-7' /> 
         </button>


        </div>
</div>

      
        

       
      </div>
      <div className='w-full  h-[10rem]  flex flex-col pl-4 gap-4'>
        <div className='flex items-center gap-6'>
      <small className='text-[#46d369] text-lg'>{rating}/10</small>

      <small className='text-lg'>{date?.slice(0, 4)}</small>
      </div>

      <p className='text-xs w-11/12 text-justify lg:text-left lg:text-sm lg:w-11/12'>{description}</p>

     
      </div>
    </div>
  )
}

export default InfoModal