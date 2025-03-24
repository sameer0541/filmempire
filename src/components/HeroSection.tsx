/* eslint-disable no-constant-binary-expression */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Link } from "react-router-dom";
import TrendCard from "./ui/trendCard"
import {  useSelector } from "react-redux"
import { useState } from "react";
import Cross from "./icons/cross";
import Tick from "./icons/tick";

const HeroSection = () => {
  const netOriginal = useSelector((state:any)=>state.trendingMovie.trendingMovies);
  const netFlixOriginals = useSelector((state:any)=>state.Originals.netFlixOriginals);
  const TVShows = useSelector((state:any)=>state.TVShows.TVShowsList)
  const [transValue,setTransValue] = useState(0);
  
  // useEffect(()=>{
  //   const interval = setInterval(() => {
  //     setTransValue((prev)=>(prev+1)%5)
  //   }, 2000);
  //   return ()=> clearInterval(interval);
  // },[])
  return(
  <>
      <section className="w-screen h-screen relative overflow-x-hidden no-scrollbar">
      <img src={netOriginal!=undefined ?`https://image.tmdb.org/t/p/w500/${netOriginal[transValue]?.poster_path}` :"/assets/background.png"} alt="back" className="w-screen h-[95vh] object-fill transition-all" width={1080} height={720}/>
      <div className="absolute w-full min-h-[10vh] bottom-0 bg-gradient-to-t from-[#111] to-transparent -translate-y-[5vh] "/>
      <div className={`w-full overflow-y-hidden overflow-x-scroll no-scrollbar flex flex-row -mt-[15vh] absolute md:relative md:-mt-[10vh] lg:-mt-[15vh] gap-6 pl-[20vw] pr-[20vw]`}>
        {netOriginal.slice(0,5).map((movie:any,index:number)=><TrendCard key={index} elementIndex={index} data={index} translateValue={transValue} poster_path={movie.poster_path} setTransValue={setTransValue}/>)}
      </div>
        <h2 className="text-white font-semibold mt-5 pl-2">TRENDING NOW</h2>
        <div className="w-screen overflow-y-hidden overflow-x-scroll no-scrollbar flex flex-row relative gap-2 pl-6 pr-3">
            {netOriginal?.slice(0,12).map((movie:any,index:number)=>{
              const title = movie.title || movie.original_title;
              const date = movie.release_date.split("-")[0].toString()
              const rating = movie.vote_average.toString();
              return(
                <div key={index} className={`w-[max(25vw,195px)] h-[max(17vw,145px)] flex flex-row items-center justify-center -gap-2 select-none hover:scale-[1.05] hover:z-10 hover:backdrop-blur-sm transition-transform duration-100 hover:shadow-lg`}>
                  
                  <Link to={`/watch/${encodeURIComponent([movie.id,movie.poster_path,title,date,rating].join("-").toString())}`}>
                    <div className={`w-[max(25vw,195px)] h-[max(15vw,125px)] bg-slate-600 text-white cursor-pointer`}>
                      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="bg" className="w-full h-full   object-fill" width={300} height={200} />
                    </div>
                  </Link>
                </div>
              )
            })}
        </div>
        <h2 className="text-white font-semibold mt-5 pl-2">NETFLIX ORIGINALS</h2>
        <div className="w-screen overflow-y-hidden overflow-x-scroll no-scrollbar flex flex-row relative gap-2 pl-6 pr-3">
            {netFlixOriginals.map((movie:any,index:number)=>{
              const title = movie.name || movie.original_name;
              const date = movie.first_air_date.split("-")[0].toString()
              const rating = movie.vote_average.toString();
              return(
                <div key={index} className={`w-[max(25vw,195px)] h-[max(17vw,145px)] flex flex-row items-center justify-center -gap-2 select-none hover:scale-[1.05] hover:z-10 hover:backdrop-blur-sm transition-transform duration-100 hover:shadow-lg`}>
                  
                  <Link to={`/watch/originals/${encodeURIComponent([movie.id,movie.poster_path,title,date,rating].join("-").toString())}`}>
                    <div className={`w-[max(25vw,195px)] h-[max(15vw,125px)] bg-slate-600 text-white cursor-pointer`}>
                      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="bg" className="w-full h-full   object-fill" width={300} height={200} />
                    </div>
                  </Link>
                </div>
              )
            })}
        </div>
        
        <h2 className="text-white font-semibold mt-5 pl-2">TV SHOWS</h2>
        <div className="w-screen overflow-y-hidden overflow-x-scroll no-scrollbar flex flex-row relative gap-2 pl-6 pr-3">
        {TVShows?.slice(0,12).map((movie:any,index:number)=>{
              const title = movie.name || movie.original_name;
              const date = movie.first_air_date.split("-")[0].toString()
              const rating = movie.vote_average.toString();
              return(
                <div key={index} className={`w-[max(25vw,195px)] h-[max(17vw,145px)] flex flex-row items-center justify-center -gap-2 select-none hover:scale-[1.05] hover:z-10 hover:backdrop-blur-sm transition-transform duration-100 hover:shadow-lg`}>
                  
                  <Link to={`/watch/tv/${encodeURIComponent([movie.id,movie.poster_path,title,date,rating].join("-").toString())}`}>
                    <div className={`w-[max(25vw,195px)] h-[max(15vw,125px)] bg-slate-600 text-white cursor-pointer`}>
                      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="bg" className="w-full h-full   object-fill" width={300} height={200} />
                    </div>
                  </Link>
                </div>
              )
            })}
        </div>
    </section>
    <div className="w-full min-h-[50vh] flex flex-row">
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className='text-neutral-50 text-[max(3vw,15px)]'>Frequently Asked Question</h1>
      <details>
        <summary className="text-neutral-300 font-semibold">What is Netflix?</summary>
        <p>Netflix is a popular streaming service that offers a vast library of movies, TV shows, documentaries, and original content.</p>
      </details>
      <details>
        <summary className="text-neutral-300 font-semibold">How musch does it cost?</summary>
        <div className="flex flex-row">
          <div className="flex flex-row text-white">
            <p>Basic</p>
            <h4>$7.99</h4>
          </div>
          <div>
            <ul className="text-white list-none">
              <li className="text-neutral-100"><Tick/></li>
              <li className="text-neutral-100"><Tick/></li>
              <li className="text-neutral-100"><Cross/></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row text-white">
            <p>Standard</p>
            <h4>$10.99</h4>
          </div>
          <div>
            <ul className="text-white list-none">
              <li className="text-neutral-100"><Tick/></li>
              <li className="text-neutral-100"><Tick/></li>
              <li className="text-neutral-100"><Cross/></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row text-white">
            <p>Premium</p>
            <h4>$12.99</h4>
          </div>
          <div>
            <ul className="text-white list-none">
              <li className="text-neutral-100"><Tick/></li>
              <li className="text-neutral-100"><Tick/></li>
              <li className="text-neutral-100"><Cross/></li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="text-neutral-300 font-semibold">Where can i Watch?</summary>
        <p>Netflix is a popular streaming service that offers a vast library of movies, TV shows, documentaries, and original content.</p>
      </details>
    </div>
    </div>
    </>
  )
}

export default HeroSection
