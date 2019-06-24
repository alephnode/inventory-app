/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const boxListStyles = {
  container: css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2rem auto;
  `,
  box: css`
    border: 1px solid var(--accent-color);
    width: 15rem;
    margin: 0.5rem;
    padding: 0.25rem 0.5rem;
    font-family: 'Butler', 'Times New Roman';
    color: var(--primary-color);
    cursor: pointer;
    :hover {
      background-color: var(--hover-color);
    }
  `,
  boxItem: css`
    font-size: 1rem;
    font-family: 'Butler-UltraLight', 'Times New Roman';
    color: var(--primary-txt-color);
  `
}

export { boxListStyles }
