import React, { useEffect } from 'react'

export default function ExampleTwo() {

  useEffect(()=>{
    console.log("inisde useeffect");
    
  },[])

  
  return (
    <div>
      {console.log("inisde return")}

        <h1>Useeffect</h1>
      
    </div>
  )
}
