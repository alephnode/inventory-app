/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import BoxList from '../elements/boxlist'
import { baseStyles, headerStyles } from '../common/styles'

function Home() {
  return (
    <div css={baseStyles}>
      <div css={headerStyles}>Inventory App</div>
      <BoxList />
    </div>
  )
}

export default Home
