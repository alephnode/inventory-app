/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { withRouter } from 'react-router'
import Home from '../home'
import Inventory from '../inventory'
import AddBox from '../add-box'
import Logo from '../elements/logo'
import { Route } from 'react-router-dom'
import { baseStyles } from '../common/styles'

function App() {
  return (
    <div css={baseStyles}>
      <Logo />
      <Route exact path="/" component={Home} />
      <Route exact path="/inventory" component={Inventory} />
      <Route exact path="/add-box" component={AddBox} />
    </div>
  )
}

export default withRouter(App)
