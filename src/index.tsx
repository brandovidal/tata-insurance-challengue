import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

import './index.scss'
import './styles/tokens.css'

import Home from './pages/Home'
import Congratulation from './pages/Congratulation'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/congratulation" component={Congratulation} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
