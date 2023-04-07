import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "../features/counter/counterSlice";
import changeColorReducer from '../features/colorChanger/colorChangerSlice'



export const store = configureStore({
    reducer: {
counter: counterSliceReducer,
changeColor: changeColorReducer
    }
})