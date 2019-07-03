/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { boxListStyles } from './styles'

function BoxList(props) {
  return (
    <div css={boxListStyles.container}>
      {props.boxes.map(box => (
        <div key={box._id} css={boxListStyles.box}>
          <div
            id={box._id}
            css={boxListStyles.delete}
            onClick={props.handleClick}
          >
            x
          </div>
          <p>{box.box}</p>
          <p css={boxListStyles.boxItem}>{box.items}</p>
        </div>
      ))}
    </div>
  )
}

export default BoxList
