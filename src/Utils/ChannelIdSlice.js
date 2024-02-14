import { createSlice } from "@reduxjs/toolkit";

const ChannelIdSlice = createSlice({
    name:'channelId',
    initialState:"",
    reducers:{
        putChannelId:(state, action)=>{
              state = action.payload;
        }
    }
})

export const {putChannelId} = ChannelIdSlice.actions;
export default ChannelIdSlice.reducer;
