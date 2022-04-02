import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlice';
import sideMenuReducer from '../features/car/sideMenuSlice';
import otherItemsReducer from '../features/car/otherItemSlice';

export const store = configureStore({
  reducer: {
    car: carReducer,
    sideMenuItems: sideMenuReducer,
    otherItems: otherItemsReducer
  },
});
