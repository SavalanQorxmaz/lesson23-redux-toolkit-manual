import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count: 0
}

export const counterSlice = createSlice({

    name: 'counter',
    initialState,
    reducers: {

        increment: (state)=>{
            state.count += 1
        },

        decrement: (state)=>{
            if ((state.count) > 0) {
                state.count -= 1
            }
           
        },

        incrementByAmount: (state, action)=>{
            if(action.payload >= 0){

                state.count += action.payload
            }
            else if(action.payload < 0){
                if(state.count+action.payload >= 0){
                    state.count += action.payload
                }
            }
        },

        reset: (state)=>{
            state.count = 0
        }
    }

})

export const selectCount = (state) => state.counter.count

export const {increment, decrement, incrementByAmount, reset} = counterSlice.actions


export default counterSlice.reducer