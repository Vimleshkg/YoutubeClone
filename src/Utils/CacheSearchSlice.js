import { createSlice } from "@reduxjs/toolkit";

const cacheSearchSlice= createSlice({
    name:'cacheSearch',
    initialState:{},
    reducers:{
        putSuggestion:(state,action)=>{
           state = Object.assign(state, action.payload);
        }
    }
})


export const { putSuggestion } = cacheSearchSlice.actions;
export default cacheSearchSlice.reducer;