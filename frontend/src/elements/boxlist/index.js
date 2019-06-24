import React, { useState, useEffect } from 'react'

function BoxList(props) {
  const [boxes, setBoxes] = useState([])
  const fetchBoxes = async () => {
    let res = await fetch('http://localhost:8811/boxes')
    res = await res.json()
    setBoxes(res)
  }
  useEffect(() => {
    fetchBoxes()
  })
  return (
    <>
      {boxes.map(box => (
        <div key={box._id}>
          <p>{box.box}</p>
          <p>{box.items}</p>
        </div>
      ))}
    </>
  )
}

export default BoxList
