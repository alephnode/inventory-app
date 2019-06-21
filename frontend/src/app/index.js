import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Home from '../home'
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
    </>
  )
}

export default withRouter(App)
