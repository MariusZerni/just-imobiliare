import React, { useState, useMemo, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/all.scss'
import '../utilities/Utilities.js'


import Home from '../components/Home'
import Apartment from '../components/Apartment'
import House from '../components/House'
import Land from '../components/Land'
import Office from '../components/Office'
import CommercialProperty from '../components/CommercialProperty'
import IndustrialProperty from '../components/IndustrialProperty'
import LoginRegister from '../components/LoginRegister'
import EditProfile from '../components/EditProfile'
import Header from '../components/Header'
import { UserContext } from '../components/UserContext'


const App = () => {
  const [user, setUser] = useState(null)
  const value = useMemo(() => ({ user, setUser }), [user, setUser])

  useEffect(() => {
    if (value && value.user !== null) {
      localStorage.setItem('user', JSON.stringify(value))
    } else {
      console.log('null user')
      setUser(getLocalUser())
    }
  }, [value])

  const getLocalUser = () => {   
    if (localStorage.user && (!value || !value.user)) {
      const localUser = localStorage.getItem('user')
      return localUser ? (JSON.parse(localUser)).user : null
    } 
    return null
  }


  return (<>
    <BrowserRouter>
      <Switch>
        <UserContext.Provider value={value}>
          <Route exact path="/" component={LoginRegister} />
          <Route exact path="/home" component={Home} />
          <Route path="/apartment" component={Apartment} />
          <Route path="/house" component={House} />
          <Route path="/land" component={Land} />
          <Route path="/office" component={Office} />
          <Route path="/industrial-property" component={IndustrialProperty} />
          <Route path="/commercial-property" component={CommercialProperty} />
          <Route exact path="/edit-profile" component={EditProfile} />
          <Route path="/header" component={Header} />
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  </>
  )
}

export default App