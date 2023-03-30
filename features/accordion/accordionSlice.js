import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accordionData: [
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget.'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget.'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget.'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget.'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget.'
        }
    ],
    selected: null,
};

const accordionSlice = createSlice({
    name: 'accordion',
    initialState,
    reducers: {
        toggle: (state, action) => {
            if (state.selected === action.payload) {
                state.selected = null
            }else{
                state.selected = action.payload
            }
        }
    }
});

export default accordionSlice.reducer;
export const { accordionChange, toggle } = accordionSlice.actions;