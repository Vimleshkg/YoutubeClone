import { createSlice } from "@reduxjs/toolkit";

const YtDataSlice = createSlice({
    name:'ytData',
    initialState:{
        data:[]
    },
    reducers:{
        putData:(state, action)=>{
           state.data = action.payload;
        }
    }
})

export const { putData } = YtDataSlice.actions;
export default YtDataSlice.reducer;