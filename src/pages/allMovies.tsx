/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AllMovies = () => {
  
  const netOriginal = useSelector((state:any)=>state.trendingMovie.trendingMovies);
  return (
    <>
    <Navbar/>
    <section className="w-screen h-screen grid md:grid-cols-3 grid-cols-1 justify-evenly overflow-y-scroll overflow-x-hidden pt-[10vh] pl-6 max-sm:pl-[5vw]">
    {netOriginal.map((show:any,index: number)=>{
        const title = show.title || show.original_title;
        const date = show.release_date.split("-")[0].toString()
        const rating = show.vote_average.toString();
        return(
            <div key={index} className={`w-[max(25vw,195px)] max-sm:w-[90vw] h-[max(17vw,145px)] max-sm:h-[50vh] flex flex-row items-center justify-center my-4 select-none hover:scale-[1.05] hover:z-10 hover:backdrop-blur-sm transition-transform duration-100 hover:shadow-lg`}>
                  
                  <Link to={`/watch/${encodeURIComponent([show.id,show.poster_path,title,date,rating].join("-").toString())}`}>
                    <div className={`w-[max(25vw,195px)] max-sm:w-[90vw] h-[max(17vw,145px)] max-sm:h-[50vh] bg-slate-600 text-white cursor-pointer`}>
                      <img src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`} alt="bg" className="w-full h-full   object-fill" width={300} height={200} />
                    </div>
                  </Link>
                </div>
        )
    })}
  </section>
    </>
  )
}

export default AllMovies
