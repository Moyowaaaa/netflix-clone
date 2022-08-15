import React, { useEffect, useState } from "react";
import type { NextPage } from "next";

import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import Row from "../../components/Row";
import { fetchData } from "../../utils/requests";
import dynamic from "next/dynamic";
import { MovieProps } from "../../utils/interfaces";


const Movies: NextPage<MovieProps> = ({playing,popular,comingSoon, topRated,}) => {
  const Banner = dynamic(() => import("../../components/Banner"), {
    ssr: false,
  });

  return (
    <div className="flex flex-col bg-[#141414]  ">
      <div className="h-[50vh] lg:h-screen flex w-full  flex-col relative ">
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
