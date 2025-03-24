/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react"
import { Link, redirect, useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import axios from "axios";


const OriginaslWatch = () => {
  const params = useParams();
  const parameters = params.id?.split("-")||[];
  const id = parameters[0],imageUrl= parameters[1],title=parameters[2],year=parameters[3],rating=parameters[4];
  const [videoKey,setVideoKey] = useState(null);
  const TVShows = useSelector((state:any)=>state.TVShows.TVShowsList)
  if(!TVShows){
    redirect("/");
  }
  const fetchTrailer = useCallback(async()=>{
    const API_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
    const API_URL = `https://api.themoviedb.org/3/tv/${id}/videos`
    const res = await axios.get(API_URL,{
        headers:{
            Accept:"application/json",
            Authorization: `Bearer ${API_ACCESS_TOKEN}`
        }
    })
    console.log(res);
    setVideoKey(res.data.results.at(-1).key);
  },[id, videoKey])
  useEffect(()=>{
    fetchTrailer();
  })
  return (
    <section className='h-screen w-screen overflow-hidden'>
    <section className="w-screen h-screen overflow-hidden absolute">
        <div className='w-screen h-screen absolute overflow-hidden -z-10 drop-shadow-lg '>
            <img src={`https://image.tmdb.org/t/p/w500/${imageUrl}`} alt="bg-cover" className='w-full h-full object-fill items-center' width={1000} height={720} />
        </div>
        <Link to={'/'} className='text-white text-2xl'><span>&larr;</span></Link>
        <div className='flex flex-col h-3/4 justify-around pl-6 selection:bg-neutral-50'>
            <div className='flex flex-col w-2/5 h-2/5 max-sm:w-full'>
            <h2 className='text-slate-50 font-semibold w-fit h-fit overflow-hidden text-wrap text-ellipsis text-[max(5vw,24px)] line-clamp-2 shadow-text'>{title}</h2>
            <div className='flex flex-row gap-5 pl-7 w-1/3 justify-between mt-2 items-center'>
            <div className="flex flex-row">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="gold"/>
              </svg>
              <h3 className='text-slate-50 shadow-text'>{Number(rating).toFixed(1)}</h3>
            </div>
              <div className='bg-green-700 text-white font-bold px-1 rounded-sm shadow-box'>{year}</div>
              <h2 className='text-white font-semibold border-2 rounded-md px-1 border-white shadow-text'>U/16+</h2>
            </div>
            </div>
            <div className='w-2/5 max-sm:w-1/4 h-[10vh] overflow-hidden'>
            
            </div>
            <div className='h-4 w-2'/>
            <div className='flex flex-row gap-4 pl-6'>
              <Link to={`/watch/video/${videoKey}`}>
                <button className={`px-6 py-2 rounded-md shadow-md shadow-slate-800 text-slate-50 bg-slate-950 font-semibold  font-sans cursor-pointer ${videoKey==null ? 'hidden':''}`}>Trailer</button>
              </Link>
                <button className='px-6 py-2 rounded-none shadow-md shadow-slate-800 text-slate-50 bg-[#fc1326] font-semibold  font-sans'>Watch</button>
            </div>
        </div>
    </section>
    <div className='w-screen h-screen overflow-hidden flex flex-col translate-y-[90vh] hover:translate-y-[59vh] duration-[300ms] transition-all delay-75 ease-in hover:backdrop-blur-xs'>
    <h2 className="text-white font-semibold mt-5 pl-2 sticky top-1">More Like This</h2>
        <div className="w-screen overflow-y-hidden overflow-x-scroll no-scrollbar flex flex-row relative gap-2 pl-6 pr-3">
        {TVShows?.map((movie:any,index:number)=>{
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
    </div>
  </section>
  )
}

export default OriginaslWatch
