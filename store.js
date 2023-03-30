import { configureStore } from "@reduxjs/toolkit";
import productReducer from './features/product/productSlice'
import carouselReducer from './features/carousel/carouselSlice'
import accordionReducer from './features/accordion/accordionSlice'
import userReducer from './features/user/userSlice'

export const store = configureStore({
    reducer: {
        product: productReducer,
        carousel: carouselReducer,
        accordion: accordionReducer,
        user: userReducer,
    },   
});