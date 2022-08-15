import React, { useEffect, useState } from 'react'
import { PopularProp } from '../utils/interfaces'

import dynamic from 'next/dynamic'


const Jumbotron:React.FC<PopularProp> = () => {

    const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

  return (
    <div className=' absolute top-16 h-[100vh] w-full flex flex-col object-cover'>
    <ReactPlayer playing={true}
    className="react-player border-2 border-[red] h-full w-full "
    loop={true}
    width='100%'
    height={'100%'}
    volume={0}
    muted={false}
    url={"https://vimeo.com/487524775"} />

    </div>
  )


}




export default Jumbotron