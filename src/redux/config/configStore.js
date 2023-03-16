import { configureStore } from "@reduxjs/toolkit";
import content from "../modules/content";
import login from "../modules/login";

const store = configureStore({
  reducer: { 
    content,
    login,
},
devTools: process.env.NODE_ENV === "developmetns" ? false : true,
});

export default store;