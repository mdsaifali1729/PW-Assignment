import { useState } from 'react';
import './App.css';


function App() {

  let [count,setCount]=useState(0);
  function incr(){
    count++;
    setCount(count);
  }

  function decr(){
    count--;
    setCount(count);
  }

  return (
    <div className="App">
        <div className='container'>
              {count}
              <div className='btn'>
              <button onClick={incr}>Increament</button>
              <button onClick={decr}>Decreament</button>
              </div>
            
            
        </div>
    </div>
  );
}

export default App;
