import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './coponents/Card.jsx'

let myObj={
  name:"Abhishek",
  age: 24
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card newobj = {myObj} />
      {/* <Card  /> */}
    </>
  )
}

export default App
