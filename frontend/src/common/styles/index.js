/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const baseStyles = css`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: var(--primary-txt-color);
`

const headerStyles = css`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  position: fixed;
  top: 16px;
  text-shadow: -3px 3px 0px var(--hover-color),
    -1px 1px 0px var(--primary-bg-color);
  padding: 0.5rem;
  a {
    text-decoration: none;
  }
`

const imgStyles = css`
  width: 36px;
  margin-left: 0.52rem;
  margin-bottom: 0.32rem;
`

export { baseStyles, headerStyles, imgStyles }
