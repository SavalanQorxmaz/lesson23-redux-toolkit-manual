import React from 'react'
import { useSelector } from 'react-redux'
import { selectCount } from '../features/counter/counterSlice'
import { selectColor } from '../features/colorChanger/colorChangerSlice'

const Header = () => {
const bgColor = useSelector(selectColor)

  return (
    <div className='header' style={{backgroundColor: bgColor}}>
        
        <span>Count: {useSelector(selectCount)}</span>
    </div>
  )
}

export default Header