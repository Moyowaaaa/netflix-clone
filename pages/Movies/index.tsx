import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Banner from "../../components/Banner";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import Row from "../../components/Row";
import { fetchData } from "../../utils/requests";



interface Props {
  comingSoon: any[];
  playing: any[];   
  popular: any[];
  topRated:any[];
  
}


const Movies: NextPage<Props> = ({playing,popular,comingSoon, topRated,}) => {
  return (
    <div className="flex flex-col  lg:mx-16 ">
      <div className=" h-screen flex w-full  flex-col relative ">
        <Navbar />
        <Banner popular={popular} />
      </div>

      <Row title="Coming soon to netflix" data={comingSoon} />
      <Row title="Top Rated Movies" data={topRated} />
      <Row title="Trending" data={popular} />
      <Row title="Now Playing" data={playing} />
    </div>
  );
};

export default Movies;

export const getServerSideProps = async () => {
  const api_key = process.env.NEXT_PUBLIC_API_KEY;

  const upcoming = await fetchData(
    "https://api.themoviedb.org/3/movie/upcoming",
    api_key
  );
  const top = await fetchData(
    "https://api.themoviedb.org/3/movie/top_rated",
    api_key
  );
  const trending = await fetchData(
    "https://api.themoviedb.org/3/movie/popular",
    api_key
  );
  const nowplaying = await fetchData(
    "https://api.themoviedb.org/3/movie/now_playing",
    api_key
  );

  return {
    props: {
      popular: trending.results,
      playing: nowplaying.results,
      comingSoon: upcoming.results,
      topRated: top.results,
    },
  };
};
