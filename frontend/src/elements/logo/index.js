/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { headerStyles, imgStyles } from '../../common/styles'
import boxImg from '../../static/images/box-logo.png'

function Logo() {
  return (
    <div css={headerStyles}>
      <span>Inventory App</span> <img css={imgStyles} src={boxImg} />
    </div>
  )
}

export default Logo
