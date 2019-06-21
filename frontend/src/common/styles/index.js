/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const baseStyles = css`
  display: flex;
  border: 10px solid yellow;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 15px);
  color: var(--primary-txt-color);
`

export { baseStyles }
