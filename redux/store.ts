

import { configureStore } from "@reduxjs/toolkit";
import { myListReducer } from "./myListSlice";

const reducer = {
  myList: myListReducer
}


const store = configureStore({
  reducer
  });
  
  export default store;
  