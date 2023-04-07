import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    color: 'white',
    
}


export const changeColorSlice = createSlice({
    name: 'changeColor',
    initialState,
    reducers: {
        changeColor: (state)=>{
            state.color = `rgb(${Math.ceil(Math.random() * 256 - 1)},${Math.ceil(Math.random() * 256 - 1)},${Math.ceil(Math.random() * 256 - 1)})`
        },
        resetColor: (state) =>{
            state.color = `white`
        }
    }
})


export const selectColor = (state) => state.changeColor.color

export const {changeColor, resetColor} = changeColorSlice.actions

export default changeColorSlice.reducer
