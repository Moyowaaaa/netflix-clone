import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Jumbotron from "../components/Jumbotron";
import Row from "../components/Row";

import dynamic from "next/dynamic";

import { fetchData } from "../utils/requests";
import { HomeProps } from "../utils/interfaces";



const Home:  NextPage<HomeProps> = ({ popular, playing, popularTv }) => {
  const Banner = dynamic(() => import("../components/Banner"), {
    ssr: false,
  });

  const Navbar = dynamic(() => import("../components/Navbar"), {
    ssr:false
  })


  const content:any[] = [
     { title: "Popular Movies", data: popular },
      { title: "Playing Now", data: playing },
      { title: "Popular Tv", data: popularTv },
  
  ]



  return (
    <div className="flex flex-col  bg-[#141414]">
      <div className="h-[50vh] lg:h-screen flex w-full  flex-col relative ">
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
