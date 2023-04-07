import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    color: 'white'
}


export const changeColorSlice = createSlice({
    name: 'changeColor',
    initialState,
    reducers: {
        changeColor: (state)=>{
            state.color = `rgb(${Math.ceil(Math.random() * 256 - 1)},${Math.ceil(Math.random() * 256 - 1)},${Math.ceil(Math.random() * 256 - 1)})`
        }
    }
})


export const selectColor = (state) => state.changeColor.color

export const {changeColor} = changeColorSlice.actions

export default changeColorSlice.reducer
