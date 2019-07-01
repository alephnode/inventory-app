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
    width: 18rem;
    position: relative;
    height: 7em;
    margin: 0.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0.25rem 1rem;
    font-family: 'Butler-ExtraBold', 'Times New Roman';
    color: var(--primary-color);
    :hover {
      background-color: var(--hover-color);
    }
  `,
  boxItem: css`
    font-size: 1rem;
    font-family: 'Butler-UltraLight', 'Times New Roman';
    color: var(--primary-txt-color);
  `,
  delete: css`
    position: absolute;
    font-size: 1rem;
    cursor: pointer;
    color: var(--accent-color);
    top: 0.2rem;
    right: 0.5rem;
  `
}

export { boxListStyles }
