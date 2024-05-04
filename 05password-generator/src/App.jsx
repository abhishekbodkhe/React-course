import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [numberallowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed ] = useState(false)
  const [length, setLength]= useState(8)
  const [password,setPassword] = useState("")



  const generatepasssword = useCallback(()=>{ 
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass ="" 
    if (numberallowed) string += "0123456789"
    if (characterAllowed) string += "!@#$%^&*-_+=[]{}~`"


    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)
      
    }
      setPassword(pass)
  },[length,numberallowed,characterAllowed,setPassword])
  


  // generatepasssword()
  useEffect (() => {

    generatepasssword()
  },[length,numberallowed,characterAllowed,generatepasssword ])

    
// useRef hook
const PasswrodRef = useRef(null) 

const copypassword = useCallback(()=>{
  PasswrodRef.current?.select()
  window.navigator.clipboard.writeText(password)

},[password])







  return (
    <div className='w-full rounded-md bg-gray-600 px-6 text-orange-500'>
      <h2> Password generator </h2>
      <div className='flex overflow-hidden mb-6'>
        
      <input type="text" value={password} 
      className='w-full p-2 m-2 rounded-lg bg-white' 
      placeholder='password'
      ref={PasswrodRef} />
      
      <button className='m-2 p-2 rounded-lg bg-blue-600'
      onClick={copypassword}
      >Copy </button>
      
      </div>

      <div>
        <input type="range" 
        min={0}
        max={100} 
        value={length}
        onChange={(e)=>setLength(e.target.value)}
        className='p-2px' />

          <label > Length {length}</label>

        <input type="checkbox" defaultChecked={numberallowed} 
        onChange={()=>{setNumberAllowed ((prev)=> !prev)}}
         />
        <label htmlFor=""> Numbers </label>

        <input type="checkbox" defaultChecked={characterAllowed}
        onChange={()=>{setCharacterAllowed ((prev)=> !prev)}}
        />
        <label htmlFor=""> Characters </label>
      </div>
    </div>
  )
}

export default App
