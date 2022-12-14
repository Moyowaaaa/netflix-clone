import React, { useEffect, useState } from "react";

import Row from "../../components/Row";
import { fetchData } from "../../utils/requests";
import Jumbotron from "../../components/Jumbotron";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { TvShowsProps } from "../../utils/interfaces";

const Movies: NextPage<TvShowsProps> = ({ todaysTv, topRatedTv, popularTv }) => {
  const Banner = dynamic(() => import("../../components/Banner"), {
    ssr: false,
  });

  const Navbar = dynamic(() => import("../../components/Navbar"), {
    ssr:false
  })


  return (
    <div className="flex flex-col bg-[#141414] ">
      <div className="h-[50vh] lg:h-screen flex w-full  flex-col relative ">
        <Navbar />
        <Banner popular={popularTv} />
        {/* <Jumbotron /> */}
      </div>
      <Row data={todaysTv} title="Today's Tv Shows" />
      <Row data={topRatedTv} title="Top rated Tv shows" />
      <Row data={popularTv} title="Popular Tv Shows" />
    </div>
  );
};

export default Movies;

export const getServerSideProps = async () => {
  const api_key = process.env.NEXT_PUBLIC_API_KEY;

  const showsToday = await fetchData(
    "https://api.themoviedb.org/3/tv/airing_today",
    api_key
  );
  const popularTvShows = await fetchData(
    "https://api.themoviedb.org/3/tv/popular",
    api_key
  );
  const top = await fetchData(
    "https://api.themoviedb.org/3/tv/top_rated",
    api_key
  );
  return {
    props: {
      popularTv: popularTvShows.results,
      todaysTv: showsToday.results,
      topRatedTv: top.results,
    },
  };
};
