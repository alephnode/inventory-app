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
  text-shadow: -3px 3px 0px var(--hover-color),
    -1px 1px 0px var(--primary-bg-color);
`

export { baseStyles, headerStyles }
