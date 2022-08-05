import React, { useEffect, useState } from 'react'
import { InformationCircleIcon } from '@heroicons/react/outline'
import { FaPlay } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

import dynamic from 'next/dynamic'
interface Props {
    popular:any[],
}

const Jumbotron:React.FC<Props> = () => {

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