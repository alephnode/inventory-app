import React, { useState, useEffect } from 'react'

function BoxList(props) {
  const [boxes, setBoxes] = useState([])
  const fetchBoxes = () => {
    fetch('http://localhost:8811/boxes')
      .then(res => res.json())
      .then(result => setBoxes(result))
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
