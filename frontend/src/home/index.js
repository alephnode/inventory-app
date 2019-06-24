/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import BoxList from '../elements/boxlist'
import boxImg from '../static/images/box-logo.png'
import { baseStyles, headerStyles, imgStyles } from '../common/styles'

function Home() {
  return (
    <div css={baseStyles}>
      <div css={headerStyles}>
        <span>Inventory App</span> <img css={imgStyles} src={boxImg} />
      </div>
      <BoxList />
    </div>
  )
}

export default Home
