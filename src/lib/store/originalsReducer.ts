import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    netFlixOriginals:[]
}
const OriginalsSlice = createSlice({
    name:'originals',
    initialState,
    reducers:{
        setOriginals:(state,action)=>{
            state.netFlixOriginals = action.payload;
        }
    }
})

export const {setOriginals} = OriginalsSlice.actions;
export default OriginalsSlice.reducer;