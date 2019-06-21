import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app'
import './static/global.css'

const target = document.getElementById('root')

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  target
)
