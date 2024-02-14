import { createSlice } from "@reduxjs/toolkit";

const SubscriberSlice = createSlice({
    name:'Subscriber',
    initialState:"",
    reducers:{
        putSubscriber:(state, action)=>{
              state = action.payload;
        }
    }
})

export const {putSubscriber} = SubscriberSlice.actions;
export default SubscriberSlice.reducer;
