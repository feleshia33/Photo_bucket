import React, { useState } from 'react'
import './App.css';

function App() {

  const [count, setCount] = useState(0) 
  //count is current iteration
  //setCount is what ever state is set next
  
  function decrementCount()  {
    setCount(prevcount => prevcount - 1)
    //setCount is a function that takes in a parameter, "prevcount"
  }

  function incrementCount()  {
    setCount(prevCount => prevCount + 1)
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
