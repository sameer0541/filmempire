/* eslint-disable no-constant-binary-expression */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Link } from "react-router-dom";
import TrendCard from "./ui/trendCard"
import {  useSelector } from "react-redux"
import { useEffect, useState } from "react";
import Faq from "./FAQ";

const HeroSection = () => {
  const netOriginal = useSelector((state:any)=>state.trendingMovie.trendingMovies);
  const netFlixOriginals = useSelector((state:any)=>state.Originals.netFlixOriginals);
  const TVShows = useSelector((state:any)=>state.TVShows.TVShowsList)
  const [transValue,setTransValue] = useState(0);
  
  useEffect(()=>{
    const interval = setInterval(() => {
      setTransValue((prev)=>(prev+1)%5)
    }, 4000);
    return ()=> clearInterval(interval);
  },[netOriginal])
  return(
  <>
      <section className="w-screen h-screen relative overflow-x-hidden no-scrollbar">
      <img src={netOriginal!=undefined ?`https://image.tmdb.org/t/p/w500/${netOriginal[transValue]?.poster_path}` :"/assets/background.png"} alt="back" className="w-screen h-[95vh] object-fill transition-all blur-lg" width={1080} height={720}/>
      
      <img src={netOriginal!=undefined ?`https://image.tmdb.org/t/p/w500/${netOriginal[transValue]?.poster_path}` :"/assets/background.png"} alt="back" className="h-[70vh] lg:w-[50vw] w-[90vw] object-fill transition-all duration-200 ease-in-out absolute top-[10vh] left-[5vw] rounded-lg shadow-lg shadow-neutral-700/50" width={1080} height={720}/>
        {netOriginal.length>0 && (
      <div className="absolute text-neutral-200 w-[30vw] h-[50vh] right-10 top-[15vh] overflow-hidden z-10">

          <h1 className="overflow-hidden text-ellipsis line-clamp-2 text-2xl sm:text-5xl xl:text-7xl hidden lg:block font-semibold">{ netOriginal[transValue]?.title || netOriginal[transValue].original_title || 'No title'}</h1>
          <h3 className=" mt-2 text-neutral-100 font-medium hidden lg:block">{netOriginal[transValue].overview}</h3>
      </div>
        )}
        <h4></h4>
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
    <div className="w-full min-h-[50vh] flex flex-row">
      <div className='w-full min-h-[75vh] flex flex-col justify-start items-center pl-2 md:pl-[10vh]  gap-2 mt-10 mb-4'>
        <h1 className='text-neutral-50 text-[max(3vw,25px)]'>Frequently Asked Question</h1>
        <Faq/>
        <h4 className="mt-[5vh] font-semibold">Ready to watch? Enter your email to create or restart your membership.</h4>
        <div className="flex flex-row items-center justify-center w-[40vw] h-[5vh] gap-1 mb-[7vh]">
          <input type="text" className="flex flex-3 bg-neutral-100 h-full text-neutral-900 px-2" placeholder="Email Address"/>
          <button className="bg-red-600 py-2 px-3 flex-1 text-nowrap h-full cursor-pointer">Get Started</button>
        </div>
        <div className="w-screen h-[10vh] "/>
      </div>
    </div>
    </section>
    </>
  )
}

export default HeroSection
