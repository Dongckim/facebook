import { configureStore } from "@reduxjs/toolkit";
import content from "../modules/content";

const store = configureStore({
  reducer: { 
    content,
},
devTools: process.env.NODE_ENV === "developmetns" ? false : true,
});

export default store;