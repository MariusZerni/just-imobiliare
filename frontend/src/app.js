import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/home.scss'
import '../styles/properties.scss'
import '../styles/colors.scss'

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

// ReactDOM.render(<App />, document.getElementById('root'))


// const App = () => (
//   <BrowserRouter>
//     <Switch>
//       <Route path="/register" component={Register} />
//       <Route path="/login" component={Login} />
//       <Route exact path="/" component={Home} />
//       <Route exact path="/create" component={CreateEvent} />
//       <Route exact path="/hub" component={Events} />
//     </Switch>
//   </BrowserRouter>
// )

ReactDOM.render(<App />, document.getElementById('root'))
