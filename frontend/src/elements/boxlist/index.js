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
  const handleClick = async e => {
    let result
    const res = await fetch(`http://localhost:8811/boxes/${e.target.id}`, {
      method: 'delete'
    })
    try {
      result = res.json()
    } catch (e) {
      result = e
    }
    fetchBoxes()
    return result
  }
  return (
    <div css={boxListStyles.container}>
      {boxes.map(box => (
        <div key={box._id} css={boxListStyles.box}>
          <div id={box._id} css={boxListStyles.delete} onClick={handleClick}>
            x
          </div>
          <p>{box.box}</p>
          <p css={boxListStyles.boxItem}>{box.items}</p>
        </div>
      ))}
    </div>
  )
}

export default BoxList
