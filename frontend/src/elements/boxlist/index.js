/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState, useEffect } from 'react'
import { boxListContainerStyles, boxStyles } from './styles'

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
    <div css={boxListContainerStyles}>
      {boxes.map(box => (
        <div key={box._id} css={boxStyles}>
          <p>{box.box}</p>
          <p>{box.items}</p>
        </div>
      ))}
    </div>
  )
}

export default BoxList
