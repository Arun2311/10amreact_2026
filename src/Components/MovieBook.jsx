import React, { useEffect, useRef } from 'react'

export default function MovieBook({ name, rating, setnames }) {

  let inputref = useRef(null)



  const handleclick = () => {

    setnames("Monkey d Luffy")

  }

  useEffect(() => {
    inputref.current.focus()
  }, [])



  return (
    <div>
      {/* <h1>{name}</h1>
      <h2>{rating}/10</h2>

      <button onClick={handleclick}>send data</button> */}

      <input ref={inputref} placeholder='enter' />
    </div>
  )
}


