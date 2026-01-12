import { useEffect, useState } from 'react'
import './App.css'

function App() {
   const[custom,setCustom]=useState([])
   console.log(custom)
  useEffect(()=>{
    fetch('Custom-data.json')
    .then(res=>res.json())
    .then(data=>setCustom(data))
  },[])
  return (
    <>
       <h1>hello Programer {custom.length}</h1>
       {
        custom.map(cust=>
          <ul>
            <h1>{cust.name}</h1>
            <p>{cust.age}</p>
            <img src={cust.image}></img>
          </ul>
        )
       }
    </>
  )
}

export default App
