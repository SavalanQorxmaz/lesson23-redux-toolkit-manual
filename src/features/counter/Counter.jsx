import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCount, increment, decrement } from './counterSlice'

const Counter = () => {
  console.log(useSelector(selectCount))
  console.log(useDispatch())
  const dispatch = useDispatch()
  return (
    <div className='counter'>
        <div>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(increment())}>+</button>
        </div>
    </div>
  )
}

export default Counter