import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  const addValue = ()=>{
    setCount(count+1)
  }

 

  const decreaseValue =()=>{
    if (count <= 0 ) {
      return  ;
     }

     setCount(count - 1);

  }

  return (
    <>
      <h1> React Counter game </h1>
      <h2> Counter value {count} </h2>

      <button onClick={addValue}> increase counter </button>
      <br />
      <br />
      <button onClick={decreaseValue}> decrease counter </button>
    </>
  )
}

export default App
