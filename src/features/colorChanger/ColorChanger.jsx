import React from 'react'
import { useDispatch } from 'react-redux'
import { changeColor, resetColor } from './colorChangerSlice'

const ColorChanger = () => {

  const dispatch = useDispatch()
  // const [resetColor, setresetColor] = useState(false)
  return (
    <div className='color-changer'>

        <button onClick={()=>dispatch(changeColor())}>Change Color</button>
        <button onClick={()=>dispatch(resetColor())}>Reset Color</button>
    </div>
  )
}

export default ColorChanger