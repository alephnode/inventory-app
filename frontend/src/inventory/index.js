/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { abContainerStyles } from './styles'
import { Link } from 'react-router-dom'
import ActionButton from '../elements/action-button'
import BoxList from '../elements/boxlist'

function Inventory() {
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
    <>
      <Link to="/add-box">
        <div css={abContainerStyles}>
          <ActionButton text="ADD" />
        </div>
      </Link>
      <BoxList boxes={boxes} handleClick={handleClick} />
    </>
  )
}

export default Inventory
