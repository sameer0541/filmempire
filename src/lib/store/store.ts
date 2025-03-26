import { configureStore } from "@reduxjs/toolkit";
import trendReducer from "./trendReducer";
import originalsReducer from "./originalsReducer";
import TVShowsReducer from "./tvShowsReducer";
import utilReducer from "./utilReducer";


export const store = configureStore({
    reducer:{
        trendingMovie: trendReducer,
        Originals: originalsReducer,
        TVShows:TVShowsReducer,
        Contact : utilReducer
    }
})
