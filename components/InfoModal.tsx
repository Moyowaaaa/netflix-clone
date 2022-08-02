import React from 'react'

const InfoModal:React.FC<Props> = ({set,id, title, description, rating, date, image}) => {
  console.log("imag",image)
  return (
    <div className='modal-main'>
    <div className='modal' style = {image !== null ? {backgroundImage: `url(https://image.tmdb.org/t/p/w500/${image})`} : {backgroundImage: `url(/fallback.jpeg)`}}>
    
        <div className='modal-content'>
            <div className='modal-header'>
                <p className='w-[3rem] h-[3rem] rounded-full right-0 absolute py-4 mt-2 border-2 flex items-center justify-center cursor-pointer mr-4 ' onClick={() => {
                    set(false)
                }}>X</p>
                <div className='pl-4 absolute bottom-12'>
                <p className='z-50 text-[3.3rem]'>{title}</p>
                <div className='w-full flex flex-col'>
                  <p className='text-sm w-9/12'>{description}</p>
                  </div>

</div>
                {/* <div className='pl-4'>
                <p className='z-50 text-[3.3rem]'>{title}</p>
                <div className='w-full flex flex-col'>
                  <p className='text-sm w-9/12'>{description}</p>

                  <div className='flex w-7/12 border-2 border-[red] gap-12'>
                    <small className='text-[#46d369] text-lg'>{rating}/10 Rating </small>

                    <small className='text-[#46d369] text-lg'>{date}</small>
                    
                  </div>
                </div>
                </div> */}

<div className='flex w-full bg-[black] pl-4  gap-12 absolute bottom-0'>
                    <small className='text-[#46d369] text-lg'>{rating}/10 Rating </small>

                    <small className='text-[#46d369] text-lg'>{date}</small>
                    
                  </div>

                </div>
                </div>
                </div>
    </div>
  )
}

export default InfoModal