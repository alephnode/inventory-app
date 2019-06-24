/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import BoxList from '../elements/boxlist'
import { baseStyles } from '../common/styles'

function Home(props) {
  return (
    <div css={baseStyles}>
      <div>Inventory App</div>
      <BoxList />
    </div>
  )
}

export default Home
