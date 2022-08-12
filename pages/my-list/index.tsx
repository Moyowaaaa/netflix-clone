import { NextPage } from 'next'
import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import Row from '../../components/Row'
import ListCard from '../../components/ListCard'


const myList:NextPage = () => {
    const dispatch = useDispatch()
    const list = useSelector((state:any) => state.myList)

    console.log("list",list.list)

    
    
   

  return (
    <div className='min-h-screen h-auto bg-[#141414]'>
    <Navbar/> 


    <div className='pt-[4rem] px-4'>
    <h2>
        My List
    </h2>

    </div>

    {list.list.length === 0 ? (
        <div className='flex justify-center items-center'>
            <h2>You have no movies/shows saved to your list</h2>
        </div>

    ) : ( 
        <div className='overflow-x-scroll'>
      
             
              <ListCard data={list.list} />
      
        </div>
    )}

    {/* {list.list.length === 0 ? (
      <h2>You hve no items in your list</h2>
    ):(
      <div className='flex flex-col'>
      {list.list.map((item:any, index:number) => (
        <Row key={index} data={item} />
      ))}
      </div>
    )}
    */}


    </div>
  )
}

export default myList