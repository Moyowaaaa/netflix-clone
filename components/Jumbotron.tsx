import React, { useEffect, useState } from 'react'
import { InformationCircleIcon } from '@heroicons/react/outline'
import { FaPlay } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

import dynamic from 'next/dynamic'
interface Props {
    popular:any[],
}

const Jumbotron:React.FC<Props> = ({popular}) => {
    const baseUrl:string = 'https://image.tmdb.org/t/p/original/'

    const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

  return (
    <div className=' absolute top-16 h-[100vh] w-11/12 flex flex-col object-cover'>
    <ReactPlayer playing={true}
    className="react-player border-2 border-[red] h-full w-full "
    loop={true}
    width='100%'
    height={'100%'}
    volume={0}
    muted={false}
    url={"https://vimeo.com/616808396"} />

    </div>
  )


}




export default Jumbotron