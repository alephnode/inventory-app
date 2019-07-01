/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const addStyles = css`
  color: var(--accent-color);
  background: var(--hover-color);
  border: 1px solid var(--accent-color);
  padding: 0.25rem 1rem;
  padding-top: 0.5rem;
  text-decoration: none;
  position: fixed;
  right: 0.75rem;
  bottom: 0.75rem;
  z-index: 1;
  font-size: 1rem;
`
export { addStyles }
