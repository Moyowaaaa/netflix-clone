import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Row from '../components/Row'
import Banner from '../components/Banner'

import {fetchData} from '../utils/requests'



interface Props{
  popular:any[],
  playing:any[],
  popularTv:any[]
   
}




const Home: NextPage<Props> = ({popular, playing, popularTv}) => {



  return (
    <div className='flex flex-col w-10/12 mx-auto'>
    <div className=' h-screen flex w-full  flex-col relative items-center mx-auto'>
      
      <Navbar />
     
    
      <Banner popular={popular} />
      </div>

      <section>
        
      <Row data={popular} title="Trending" />
      <Row data={playing} title="Now Playing" />
      <Row data={popularTv} title="Popular Tv Shows"/>
      </section>

   
     
   
    </div>
  )
}

export default Home

export const getServerSideProps = async() => {
  // const api_key = process.env.API_KEY
  const api_key = "fc66a3e2b7af135167185d8882134a83"

  const trending = await fetchData('https://api.themoviedb.org/3/movie/popular', api_key)
  const nowplaying = await fetchData('https://api.themoviedb.org/3/movie/now_playing', api_key)
  const popularTvShows = await fetchData('https://api.themoviedb.org/3/tv/popular', api_key)
  return {
    props:{
     
      popular: trending.results,
      playing:nowplaying.results,
      popularTv:popularTvShows.results
    }
  }
}

