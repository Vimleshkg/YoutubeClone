import { createSlice } from "@reduxjs/toolkit";

const SideBarSlice = createSlice({
    name:'SideBar',
    initialState:{
        isSideBar:true,
    },
    reducers:{
        menuToggle:(state)=>{
            state.isSideBar=!state.isSideBar;
        },

        SideMenuFalse: (state)=>{
            state.isSideBar = false; 
        }
    }
});

export const {menuToggle, SideMenuFalse} = SideBarSlice.actions;
export default SideBarSlice.reducer;