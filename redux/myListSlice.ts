import { createSlice } from "@reduxjs/toolkit";

const initialState:any = {
    list: []
}

const myListSlice = createSlice({
    name: "myList",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.list.push(action.payload);
            
        },
        removeItem: (state, action) => {
            state.list = state.list.filter((item:any) => item.id !== action.payload.id);
         
        }
    }


})
export const myListReducer = myListSlice.reducer;


export const {addItem, removeItem} = myListSlice.actions;
