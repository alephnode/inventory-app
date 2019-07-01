/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { headerStyles, imgStyles } from '../../common/styles'
import boxImg from '../../static/images/box-logo.png'

function Logo() {
  return (
    <div css={headerStyles}>
      <Link to="/">
        <span>Inventory App</span> <img css={imgStyles} src={boxImg} />
      </Link>
    </div>
  )
}

export default Logo
