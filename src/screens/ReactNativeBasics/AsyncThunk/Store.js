import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./SliceScreen"



export const store =configureStore({

    reducer:{
      product:ProductReducer


    },





})