import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/all.scss'
import '../utilities/Utilities.js'


import Home from '../components/Home'
import Apartment from '../components/Apartment'
import LoginRegister from '../components/LoginRegister'





const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginRegister}/>
      <Route exact path="/home" component={Home} />
      <Route path="/apartment" component={Apartment}/>
    </Switch>
  </BrowserRouter>
)


ReactDOM.render(<App />, document.getElementById('root'))
