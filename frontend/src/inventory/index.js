import React from 'react'
import { Link } from 'react-router-dom'
import BoxList from '../elements/boxlist'

function Inventory() {
  return (
    <>
      <Link to="/add-box">ADD</Link>
      <BoxList />
    </>
  )
}

export default Inventory
