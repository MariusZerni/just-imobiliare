import React, { useState, useRef, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import auth from '../lib/auth'
import logo from '../images/logo70.png'
// import Axios from 'axios'
import { UserContext } from '../components/UserContext'



const Header = () => {
  const [userDropdown, setUserDropdown] = useState(false)
  const { user } = useContext(UserContext)
  // const [userId, setuserId] = useState()
  // const { user } = props
  const menuRef = useRef()
  const menuOn = useRef()
  // console.log('user', user)


  // console.log(user)
  useEffect(() => {
    console.log(user)
  })

  const handleDropdown = () => {
    document.addEventListener('mousedown', (event) => {

      if (!user) {
        console.log('return')
        return
      }

      console.log('clicked')


      if (!menuRef.current.contains(event.target)) {
        console.log('menu ref')
        setUserDropdown(false)
      } else if (!userDropdown) {
        console.log('else')
        setUserDropdown(true)
      }
    })
  }

  const handleLogout = () => {
    console.log('logout')
    auth.logout()
    setUserDropdown(false)
  }

  // const fetchUser = () => {
  //   const userId = auth.getUserId()
  //   Axios.get(`./api/users/${userId}`)
  //     .then(res => setuserId(res.data))
  //     .catch(error => console.log(error))
  // }

  // console.log('props', props)

  return <div className="header">
    <div className="content-header">
      <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
      <div className="search-box">
        <div className="content-search">
          <div className="search">
            <input type="text" className="search-input" aria-label="search"
              placeholder="enter your search" />
            <button className="search-submit" aria-label="submit search">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div ref={menuRef} onClick={() => handleDropdown()}
        className="profile" >
        <div className="name">
          {auth.isLoggedIn() && <> <h6>{user ? user.name : 'Agent'}</h6>
            <i className="fas fa-caret-down fa-2x"></i></>}


          {/* <div className="arrow-up"></div> */}
        </div>
        <div ref={menuOn}
          className="user-profile" style={userDropdown ? { visibility: 'visible' } : { visibility: 'hidden' }}>
          <div className="link-container">
            <Link style={{ textDecoration: 'none' }} to="/edit-profile"><h6>Editeaza profil</h6></Link>
          </div>
          <div
            onClick={() => handleLogout()}
            className="link-container">
            <Link to="/home"><h6>Log out</h6></Link>

          </div>

        </div>
        {user && <div className="image" style={{ backgroundImage: `url(${'http://localhost:8000/images/' + (user.image)})` }} >
          {!user && <i className="far fa-user fa-2x"></i>}

        </div>}
        {!user && <div className="image"  >
          <i className="far fa-user fa-2x"></i>

        </div>}

      </div>
    </div>

  </div>
}

export default Header