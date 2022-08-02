import React from 'react'


interface Props {
  set: boolean;
  id:number;
  title:string,
  rating:number,
  description:string,
  date:string | number,
  image:string 
}

const InfoModal:React.FC<Props> = ({set,id, title, description, rating, date, image}) => {
  console.log("imag",image)
  return (
    <div className='modal-main rounded-lg'>
      <div className='modal-background h-[20rem] w-full '  style = {image !== null ? {backgroundImage: `url(https://image.tmdb.org/t/p/w500/${image})`} : {backgroundImage: `url(/fallback.jpeg)`}}>
      <p className='w-[3rem] h-[3rem] rounded-full right-0 absolute py-4 mt-2 flex items-center justify-center cursor-pointer mr-4 bg-[black]' onClick={() => {
            set(false)
        }}>X</p>
         <div className='pl-4 absolute bottom-56 '>
        <p className=' text-2xl lg:text-[3.3rem] z-50'>{title}</p>
        {/* <div className='w-full flex flex-col'>
          <p className='text-sm w-9/12'>{description}</p>
          </div> */}

</div>
      
        

       
      </div>
      <div className='w-full  h-[10rem]  flex flex-col pl-4 gap-4'>
      <small className='text-[#46d369] text-lg'>{rating}/10 Rating </small>

      <p className='text-xs w-11/12 text-justify lg:text-sm lg:w-9/12'>{description}</p>
      </div>
    </div>
  )
}

export default InfoModal