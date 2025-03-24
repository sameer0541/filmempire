import { createSlice } from "@reduxjs/toolkit";
const initialState={
    trendingMovies :[]
}
const TrendSlice = createSlice({
    name:'trending',
    initialState,
    reducers:{
        setTrendingMovie:(state,action)=>{
            state.trendingMovies = action.payload;
        }
    }
});

export const { setTrendingMovie } = TrendSlice.actions

export default TrendSlice.reducer;