import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuItems: [
        {
        "id": 0,
        "item": "Existing Inventory",
        "url": "/inventory/new"
        },
        {
        "id": 1,
        "item": "Used Inventory",
        "url": "/inventory/used"
        },
        {
        "id": 2,
        "item": "Trade-In",
        "url": "/tradein"
        },
        {
        "id": 3,
        "item": "Test Drive",
        "url": "/drive"
        },
        {
        "id": 4,
        "item": "Cybertruck",
        "url": "/cybertruck"
        },
        {
        "id": 5,
        "item": "Roadster",
        "url": "/roadster"
        },
        {
        "id": 6,
        "item": "Semi",
        "url": "/semi"
        },
        {
        "id": 7,
        "item": "Charging",
        "url": "/charging"
        },
        {
        "id": 8,
        "item": "Powerwall",
        "url": "/powerwall"
        },
        {
        "id": 9,
        "item": "Commercial Energy",
        "url": "/commercial"
        },
        {
        "id": 10,
        "item": "Utilities",
        "url": "/utilities"
        },
        {
        "id": 11,
        "item": "Find Us",
        "url": "/findus"
        },
        {
        "id": 12,
        "item": "Support",
        "url": "/support"
        },
        {
        "id": 13,
        "item": "Investor Relations",
        "url": "/investors"
        }
    ]
}

const sideMenuSlice = createSlice({
    name: 'sideMenuItems',
    initialState,
    reducer: {},
})

export const selectSideMenu = state => state.sideMenuItems.menuItems;

export default sideMenuSlice.reducer;