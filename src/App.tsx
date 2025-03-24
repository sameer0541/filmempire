import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { setTrendingMovie } from "./lib/store/trendReducer";
import axios from "axios";
import { setOriginals } from "./lib/store/originalsReducer";
import { setTVShows } from "./lib/store/tvShowsReducer";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = useSelector((state:any)=>state.trendingMovie.trendingMovies);
  const API_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
  const fetchTrending = async()=>{
    const API_URL = "https://api.themoviedb.org/3/trending/movie/week?include_video=true&language=en-US&page=1&sort_by=popularity.desc"
    const res = await axios.get(API_URL,{
        headers:{
            Accept:"application/json",
            Authorization: `Bearer ${API_ACCESS_TOKEN}`
        }
    })
    const data = res.data.results;
    console.log(data)
    dispatch(setTrendingMovie(data));
}
const fetchOriginals =async()=>{
    const API_URL = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_networks=213';
    const res = await axios.get(API_URL,{
      headers:{
          Accept:"application/json",
          Authorization: `Bearer ${API_ACCESS_TOKEN}`
      }
    });
    const data = res.data.results;
    dispatch(setOriginals(data));

}
const fetchTvShows =async()=>{
    const API_URL = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
    const res = await axios.get(API_URL,{
      headers:{
          Accept:"application/json",
          Authorization: `Bearer ${API_ACCESS_TOKEN}`
      }
    });
    const data = res.data.results;
    dispatch(setTVShows(data));

}
useEffect(()=>{
  if(!(data.length>0)){
    fetchTrending();
    fetchOriginals();
    fetchTvShows();
  console.log("fetched data");
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer/>
    </>
  );
};
export default App;
