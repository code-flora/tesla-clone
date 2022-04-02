import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        {
            "id": 0,
            "title": "Lowest Cost Solar Panels in America",
            "description": "Money-back Guarantee",
            "image": "https://i.imgur.com/vxRATs9.jpg",
            "leftButtonText": "Order Now",
            "rightButtonText": "Learn More"
        },
        {
            "id": 1,
            "title": "Accessories",
            "description": "",
            "image": "https://i.imgur.com/APZ58FD.jpg",
            "leftButtonText": "Shop Now"
        }
    ]
}

const otherItemSlice = createSlice({
    name: 'otherItems',
    initialState,
    reducers: {},
})

export const selectOtherItems = state => state.otherItems.items

export default otherItemSlice.reducer