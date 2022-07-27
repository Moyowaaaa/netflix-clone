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
    <div className=''>
    <ReactPlayer playing={false}
    className="react-player"
    loop={true}
    width='100%'
    height={'100%'}
    volume={1}
    muted={false}
    url={"https://vimeo.com/727214487"} />

    </div>
  )


}

export default Jumbotron