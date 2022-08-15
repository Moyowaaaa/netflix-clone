import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../public/netflix-logo.png";

const Navbar:React.FC = () => {

    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    const navLinks = [{
        name:'Home',
        link:'/'
    },
    {
        name:'TV Shows',
        link:'/TvShows'
    },
    {
        name:'Movies',
        link:'/Movies'
    },
    {
        name:'My List',
        link:'/my-list'
    }
]
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0) {
                setIsScrolled(true)
            }else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll',handleScroll)

        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    },[])


  return (
    <div className={` w-full  mb-4 flex h-[4rem] py-0   fixed z-50  ${isScrolled? 'bg-[black]' : 'bg-transparent'}`}>


        <div className='flex overflow-scroll lg:overflow-none'>
            <Image src={logo} width={120}/>
        </div>
<ul className='flex items-center gap-4 text-xs ml-16'>
          {navLinks.map(({name, link}) => (
            <Link href={link} key={name}>{name}</Link>
          ))}
        </ul>

    </div>

  )
}

export default Navbar