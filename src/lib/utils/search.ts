// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useDebounce } from "use-debounce";
// export const SearchTV = ()=>{
// const [searchedData,setSearchedData] = useState();
//   const [searchTerm,setSearchTerm]= useState<string>("");
//   const debouncedSearchTerm = useDebounce(searchTerm, 300);

//   const SearchTV = async(term:any)=>{
//     const API_URL = `https://api.themoviedb.org/3/search/movie?query=${term}&include_adult=false&language=en-US&page=1`;
//     const res = await axios.get(API_URL,{
//         headers:{
//             Accept:"application/json",
//             Authorization: `Bearer ${API_ACCESS_TOKEN}`
//         }
//     })
//     const data = res.data.results;
//     setSearchedData(data)
// }
// useEffect(()=>{
//   SearchTV(debouncedSearchTerm)
// },[debouncedSearchTerm])

// }