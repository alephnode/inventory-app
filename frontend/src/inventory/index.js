/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { addStyles } from './styles'
import BoxList from '../elements/boxlist'

function Inventory() {
  return (
    <>
      <Link css={addStyles} to="/add-box">
        ADD
      </Link>
      <BoxList />
    </>
  )
}

export default Inventory
