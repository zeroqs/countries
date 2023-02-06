import { configureStore } from '@reduxjs/toolkit'
import countriesSlice from "./slices/CountrieSlice.js";

export const store = configureStore({
    reducer: {
        countries : countriesSlice
    },
})