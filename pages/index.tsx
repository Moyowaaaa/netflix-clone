import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Row from "../components/Row";
import Banner from "../components/Banner";

import { fetchData } from "../utils/requests";

interface Props {
  popular: any[];
  playing: any[];
  popularTv: any[];
  title:any[];
  
}


const Home:  NextPage<Props> = ({ popular, playing, popularTv }) => {

  const content:any[] = [
     { title: "Popular Movies", data: popular },
      { title: "Playing Now", data: playing },
      { title: "Popular Tv", data: popularTv },
  
  ]


  return (
    <div className="flex flex-col  lg:mx-16">
      <div className=" h-screen flex w-full  flex-col relative ">
        <Navbar />

        <Banner popular={popular} />
        {/* <Jumbotron /> */}
      </div>

      <section>
       {content.map(({data,title},index) => (
          <Row data={data} title={title} key={index}/>
       ))}
      </section>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const api_key = process.env.NEXT_PUBLIC_API_KEY;

  const trending = await fetchData(
    "https://api.themoviedb.org/3/movie/popular",
    api_key
  );
  const nowplaying = await fetchData(
    "https://api.themoviedb.org/3/movie/now_playing",
    api_key
  );
  const popularTvShows = await fetchData(
    "https://api.themoviedb.org/3/tv/popular",
    api_key
  );
  return {
    props: {
      popular: trending.results,
      playing: nowplaying.results,
      popularTv: popularTvShows.results,
    },
  };
};
