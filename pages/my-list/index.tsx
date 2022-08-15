import { NextPage } from 'next'
import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'

import ListCard from '../../components/ListCard'


const myList:NextPage = () => {

    const list = useSelector((state:any) => state.myList)


    
    
   

  return (
    <div className='min-h-screen h-auto bg-[#141414]'>
    <Navbar/> 


    <div className='pt-[4rem] px-4'>
    <h2 className='text-2xl'>
        My List
    </h2>

    </div>

    {list.list.length === 0 ? (
        <div className='flex justify-start px-4 items-center'>
            <h2>You have no movies/shows saved to your list ....</h2>
        </div>

    ) : ( 
        <div className=''>
      
             
              <ListCard data={list.list} />
      
        </div>
    )}

    


    </div>
  )
}

export default myList