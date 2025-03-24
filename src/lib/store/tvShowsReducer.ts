import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    TVShowsList:[]
}
const TVShowsSlice = createSlice({
    name:'originals',
    initialState,
    reducers:{
        setTVShows:(state,action)=>{
            state.TVShowsList = action.payload;
        }
    }
})

export const {setTVShows} = TVShowsSlice.actions;
export default TVShowsSlice.reducer;