import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

import MenuBar from './components/includes/MenuBar'

import Header from './components/Header'
import Card from './components/Card'
import NavBar from './components/includes/NavBar'

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/Header" component={Header} />

      <Route exact path="/Card" component={Card} />
      
    </Router>
  )
}

export default App
