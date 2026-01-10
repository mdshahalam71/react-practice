import { useEffect, useState } from 'react'
import './App.css'
import UserData from './componets/UserData/UserData'
 
 
function App() {
   
const [allData,setAllData]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setAllData(data))


  },[])
  
 
  return (
    <>
         <h1>Total Data: {allData.length}</h1>
          {
            allData.map(single=><UserData key={single.id} single={single}></UserData>)
          }
    </>
  )
}

export default App
