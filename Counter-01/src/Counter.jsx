import React, { useState } from 'react'
import './style.css'
function Counter() {
  const [count,setCount] = useState(0)

  const decrement =() =>{
    setCount(count -1)
  }
  const Increment =() =>{
    setCount(count +1)
  }
  const reset = () => {
    setCount(0)
  }


  return (
    <>
<div className="container">
  <h1 className="number">{count}</h1>
</div>

<section className='btns-container'>
        <button onClick={Increment} className="Increment">+ </button>
        <button onClick={decrement} className="decrement"> - </button>
</section>
<button className='btn' onClick={reset}>Reset</button>
    </>
  )
}

export default Counter
