import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../public/netflix-logo.png";

const Navbar:React.FC = () => {

    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const [openMenu, setOpenMenu] = useState<boolean>(false)
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

    const closeMenu = () => {
        setOpenMenu(false)
    }


  return (
    <div>
    <div className={` w-full  mb-4 flex h-[4rem] py-0   fixed z-50  ${isScrolled? 'bg-[black]' : 'bg-transparent'}`}>


        <div className='flex '>
            <Image src={logo} width={120}/>
        </div>
<ul className='lg:flex items-center gap-4 text-xs ml-16 hidden'>
          {navLinks.map(({name, link}) => (
            <Link href={link} key={name}>{name}</Link>
          ))}
        </ul>


        {/* ----mobile navbar */}

        <div className='lg:hidden z-50 bg-[#0a192f] text-[white]'>
        
        
      

<button className="top-2 right-10 fixed z-50 text-4xl" onClick={() => setOpenMenu(!openMenu)}> &#9776;</button>

<div className={`"top-0 right-0 fixed text-[white] bg-[#141414] shadow-lg h-full w-screen z-50 ease-in-out duration-700 " ${openMenu ? " translate-x-0" : " translate-x-full"} `}>
      <button className='top-6 right-12 fixed z-50 text-2xl' onClick={closeMenu}>X</button>

      <div className=' flex flex-col h-full items-center mt-24 gap-2' >
      {navLinks.map(({name, link}) => (
            <Link href={link} key={name}>{name}</Link>
          ))}
          </div>

      </div>

          </div>

    </div>
    </div>

  )
}

export default Navbar