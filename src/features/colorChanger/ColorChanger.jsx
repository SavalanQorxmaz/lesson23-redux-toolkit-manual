import React from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from './colorChangerSlice'

const ColorChanger = () => {

  const dispatch = useDispatch()
  return (
    <div>

        <button onClick={()=>dispatch(changeColor())}>Change Color</button>
    </div>
  )
}

export default ColorChanger