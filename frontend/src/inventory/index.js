/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { abContainerStyles } from './styles'
import { Link } from 'react-router-dom'
import ActionButton from '../elements/action-button'
import BoxList from '../elements/boxlist'

function Inventory() {
  return (
    <>
      <Link to="/add-box">
        <div css={abContainerStyles}>
          <ActionButton text="ADD" />
        </div>
      </Link>
      <BoxList />
    </>
  )
}

export default Inventory
