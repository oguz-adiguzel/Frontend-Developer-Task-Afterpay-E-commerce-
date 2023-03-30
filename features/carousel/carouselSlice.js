import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    slides: [
        { url: 'https://www.firstpage.hk/wp-content/uploads/2022/06/FPHK-Cover-Image-Blog-Template-1.png', title: 'e-commerce' },
        { url: 'https://res.cloudinary.com/practicaldev/image/fetch/s--d3Zf93YT--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b21polqwakaa0daojoji.jpg', title: 'e-commerce' },
        { url: 'https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399', title: 'e-commerce' }
    ],
    currentIndex: 0
}

const carouselSlice = createSlice({
    name: 'carousel',
    initialState,
    reducers: {
        goToPrevious: (state) => {
            const isFirstSlide = state.currentIndex === 0;
            const newIndex = isFirstSlide ? state.slides.length - 1 : state.currentIndex - 1;
            state.currentIndex = newIndex;
        },
        goToNext: (state) => {
            const isLastSlide = state.currentIndex === state.slides.length - 1;
            const newIndex = isLastSlide ? 0 : state.currentIndex + 1;
            state.currentIndex = newIndex;
        }
    }
})

export default carouselSlice.reducer;
export const { goToPrevious, goToNext } = carouselSlice.actions;