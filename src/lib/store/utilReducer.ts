import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    contactRef:'/'
}
const UtilSlice = createSlice({
    name:"utils",
    initialState,
    reducers:{
        setContactRef:(state,action)=>{
            state.contactRef = action.payload
        }
    }
})

export const {setContactRef} = UtilSlice.actions

export default UtilSlice.reducer