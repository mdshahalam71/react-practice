import { useState } from "react"


function LearnuseState() {

const [price,setPrice]=useState(10);

const increaseHandeler=()=>{
    const newPrice=price+1;
    setPrice(newPrice)
}
 const DecreaseHandeler=()=>{
     if(price<=0) return

     const newPrice=price-1;
     setPrice(newPrice)
        
 }


  return (
    <div>
        <h1>Price:{price}</h1>
        <button onClick={increaseHandeler}>IncreaseBtn</button>
        <button onClick={DecreaseHandeler}>DecreaseBtn</button>
        <h2>Price:{price}</h2>
        <p>Price:{price}</p>
    </div>
  )
}

export default LearnuseState