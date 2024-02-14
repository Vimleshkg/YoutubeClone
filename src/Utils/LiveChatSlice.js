import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlice= createSlice(
    {
        name:'LiveChat',
        initialState:{
            chat:[]
        },
        reducers:{
            addLiveChat:(state, action)=>{
                if(state.chat.length>100)
                {
                    state.chat.pop();
                }
                else
                 state.chat.unshift(action.payload);
            }
        }
    }
);

export const{addLiveChat} = LiveChatSlice.actions;
export default LiveChatSlice.reducer;