import { configureStore } from "@reduxjs/toolkit";
import content from "../modules/content";

const store = configureStore({
  reducer: { 
    content,
},
});

export default store;