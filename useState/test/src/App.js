import React, { useState } from 'react'
import './App.css';

function App() {

  const [count, setCount] = useState(4) //count is current iteration, setCount is what ever state is set next
  return (
    <div className='app'>
    <button>-</button>
    <span>0</span>
    <button>+</button>
    </div>
  );
}

export default App;
