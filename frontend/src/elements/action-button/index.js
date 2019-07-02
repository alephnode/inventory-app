/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { abStyles } from './styles'
import React from 'react'

function ActionButton({ text }) {
  return <div css={abStyles}>{text}</div>
}

export default ActionButton
