import React, { useState } from 'react'
import './App.css';

function App() {

  const [count, setCount] = useState(0) //count is current iteration, setCount is what ever state is set next
  
  function decrementCount()  {
    setCount(count - 1)

  }

  function incrementCount()  {
    setCount(count + 1)

  }
  
  return (
    <div className='app'>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
