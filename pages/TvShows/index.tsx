import React,{useEffect,useState} from 'react'
import Banner from '../../components/Banner'
import Navbar from '../../components/Navbar'
import Row from '../../components/Row'
import { fetchData } from '../../utils/requests'
import Jumbotron from '../../components/Jumbotron'


interface Props {
  todaysTv:any[],
  topRatedTv:any[],
  popularTv:any[]
}


const Movies: NextPage<Props> = ({todaysTv ,topRatedTv, popularTv}) => {
 


 


  return (
    <div className='flex flex-col  mx-16'>
    <div className=' h-screen flex w-full  flex-col relative '>
      
        <Navbar />
        <Banner popular={popularTv}/>
        {/* <Jumbotron /> */}
    </div>
    <Row data={todaysTv} title="Today's Tv Shows" />
    <Row data={topRatedTv} title="Top rated Tv shows" />
    <Row data={popularTv} title="Popular Tv Shows"/>
    {/* <Row data={latestTv} title="Latest Shows on Netflix" /> */}
    

    </div>
  )
}

export default Movies


export const getServerSideProps = async() => {
  const api_key = process.env.NEXT_PUBLIC_API_KEY

  const showsToday = await fetchData('https://api.themoviedb.org/3/tv/airing_today', api_key)
  const popularTvShows = await fetchData('https://api.themoviedb.org/3/tv/popular', api_key)
  const top = await fetchData('https://api.themoviedb.org/3/tv/top_rated', api_key)
  return {
    props:{
      popularTv:popularTvShows.results,
      todaysTv:showsToday.results,
      topRatedTv:top.results,
    }
  }


}