import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: [
        {
            "id": 0,
            "title": "Model S",
            "description": "Order Online for Touchless Delivery",
            "image": "https://i.imgur.com/ZHJ567W.jpg",
            "range": "390",
            "time": "1.99",
            "topSpeed": "200",
            "peakPower": "1,020",
            "url": "/models"
        },
        {
            "id": 1,
            "title": "Model 3",
            "description": "Order Online for Touchless Delivery",
            "image": "https://i.imgur.com/gO8veBI.jpg",
            "range": "400",
            "time": "2.99",
            "topSpeed": "180",
            "peakPower": "900",
            "url": "/model3"
        },
        {
            "id": 2,
            "title": "Model X",
            "description": "Order Online for Touchless Delivery",
            "image": "https://i.imgur.com/ozBNVf4.jpg",
            "range": "350",
            "time": "1.55",
            "topSpeed": "150",
            "peakPower": "1,130",
            "url": "/modelx"
        },
        {
            "id": 3,
            "title": "Model Y",
            "description": "Order Online for Touchless Delivery",
            "image": "https://i.imgur.com/8PcKeIK.jpg",
            "range": "410",
            "time": "2.05",
            "topSpeed": "190",
            "peakPower": "1,040",
            "url": "/modely"
        }
    ]
}

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {},
})

export const selectCars = state => state.car.cars

export default carSlice.reducer