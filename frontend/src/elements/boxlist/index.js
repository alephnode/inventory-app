/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { boxListStyles } from './styles'

function BoxList() {
  const [boxes, setBoxes] = React.useState([])
  const fetchBoxes = async () => {
    let res = await fetch('http://localhost:8811/boxes')
    res = await res.json()
    setBoxes(res)
  }
  React.useEffect(() => {
    fetchBoxes()
  }, [])
  return (
    <div css={boxListStyles.container}>
      {boxes.map(box => (
        <div key={box._id} css={boxListStyles.box}>
          <p>{box.box}</p>
          <p css={boxListStyles.boxItem}>{box.items}</p>
        </div>
      ))}
    </div>
  )
}

export default BoxList
