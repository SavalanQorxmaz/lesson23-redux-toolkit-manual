import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCount, increment, decrement, incrementByAmount, reset } from './counterSlice'

const Counter = () => {
  const dispatch = useDispatch()
  const [manualCount, setManualCount] = useState(1)
  const newAmount = Number(manualCount) || 0
  return (
    <div className='counter'> 
        <div>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(increment())}>+</button>
        </div>
        <div>
          <input type="text" 
          value={manualCount}
          onChange={e=>setManualCount(e.target.value)}
          />

          <button onClick={()=>dispatch(incrementByAmount(newAmount))}>Change</button>
          <button 
          onClick={()=>{
            setManualCount(0);
             dispatch(reset());
             }}>Reset</button>

        </div>
    </div>
  )
}

export default Counter