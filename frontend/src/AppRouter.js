import React, { useState, useMemo } from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/all.scss'
import '../utilities/Utilities.js'


import Home from '../components/Home'
import Apartment from '../components/Apartment'
import LoginRegister from '../components/LoginRegister'
import EditProfile from '../components/EditProfile'
import Header from '../components/Header'
import { UserContext } from '../components/UserContext'





const App = () => {
  const [user, setUser] = useState(null)
  const value = useMemo(() => ({ user, setUser }), [user, setUser])
  
  console.log(value)
  return (<>
    <BrowserRouter>
      <Switch>
        <UserContext.Provider value={value}>
          <Route exact path="/" component={LoginRegister} />
          <Route exact path="/home" component={Home} />
          <Route path="/apartment" component={Apartment} />
          <Route exact path="/edit-profile" component={EditProfile} />
          <Route path="/header" component={Header} />
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App