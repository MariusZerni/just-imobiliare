import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/home.scss'
import '../styles/characteristics.scss'
import '../styles/locationImages.scss'
import '../styles/colors.scss'
import '../styles/price.scss'
import '../utilities/Utilities.js'

import Home from '../components/Home'
import Apartment from '../components/Apartment'





const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/apartment" component={Apartment}/>
    </Switch>
  </BrowserRouter>
)


ReactDOM.render(<App />, document.getElementById('root'))
