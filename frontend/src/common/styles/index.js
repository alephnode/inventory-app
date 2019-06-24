/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const baseStyles = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: var(--primary-txt-color);
`

const headerStyles = css`
  font-size: 1.8rem;
  position: fixed;
  top: 16px;
`

export { baseStyles, headerStyles }
