import React, { useState, useRef, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import auth from '../lib/auth'
import logo from '../images/logo70.png'
import { UserContext } from './Context'



const Nav = () => {
  const [userDropdown, setUserDropdown] = useState(false)
  const [addDropdown, setAddDropdown] = useState(false)
  // const [clickedOutside, setClickedOutside] = useState(false)
  const { user, setUser } = useContext(UserContext)
  const refUser = useRef()
  const menuAdd = useRef()



  const useOutsideClick = (ref, callback) => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback()
      } else {
        // console.log('not current')
        // console.log(ref.current)
        // console.log(e.target)
      }
    }

    useEffect(() => {
      // console.log('use effect UUU  U')
      document.addEventListener('click', handleClick)

      return () => {
        document.removeEventListener('click', handleClick)
      }
    })
  }

  useOutsideClick(menuAdd, () => {
    console.log('outside', addDropdown)
    if (addDropdown) setAddDropdown(false)
  })
  useOutsideClick(refUser, () => {
    console.log('outside', userDropdown)
    if (userDropdown) setUserDropdown(false)
  })




  const handleLogout = () => {
    auth.logout()
    localStorage.removeItem('user')
    setUser(null)
    setUserDropdown(false)
  }





  return <div className="nav-container">
    <div className="nav-content">
      <div className="nav-left-container">
        <Link to="/home" ><div className="logo" style={{ backgroundImage: `url(${logo})` }}></div></Link>
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
      {/* <div className="add-content">
        <select >
          <option selected disabled hidden>Adauga...</option>
          <option>Proprietate</option> 
          <option>Client</option> 
        </select>
      </div> */}
      <div className="nav-right-container">
        <div onClick={() => {
          console.log('show', addDropdown)
          setAddDropdown(!addDropdown)
        }}
        className="property-nav-link add-dropdown">
          <i className="fas fa-plus-circle fa-2x"></i>
          <div
            className="add-content">
            <h5>Adauga</h5>
            <i className="fas fa-caret-down fa-2x"></i>
          </div>

        </div>
        {addDropdown && <div ref={menuAdd}
          className="dropdown add-items">
          <div className="link-container">
            <Link style={{ textDecoration: 'none' }} to="/home"><h6>Proprietate</h6></Link>
          </div>
          <div
            onClick={() => handleLogout()}
            className="link-container">
            <Link style={{ textDecoration: 'none' }} to="/clients"><h6>Clienti</h6></Link>
          </div>
        </div>}

        <Link style={{ textDecoration: 'none' }} to="/properties">
          <div className="property-nav-link">
            <i className="fas fa-home fa-2x"></i>
            <h5>Proprietati</h5>

          </div>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/clients">
          <div className="property-nav-link">
            <i className="fas fa-users fa-2x"></i>
            <h5>Clienti</h5>
          </div>
        </Link>
        <div onClick={() => {console.log('inverting user dropdown', userDropdown); setUserDropdown(!userDropdown)}}
          className="profile" >
          {user && <div className="image" style={{ backgroundImage: `url(${'http://localhost:8000/images/' + (user.image)})` }} >
            {!user.image && <i className="far fa-user fa-2x"></i>}
          </div>}
          {!user && <div   >
            <i className="far fa-user fa-2x"></i>
          </div>}
          <div className="name">
            {auth.isLoggedIn() && <> <h6>{user ? user.name : 'Agent'}</h6>
              <i className="fas fa-caret-down fa-2x"></i></>}
            {!auth.isLoggedIn() && <Link style={{ textDecoration: 'none' }} to="/" ><h6>Log In</h6></Link>}
          </div>
          {userDropdown && <div ref={refUser} className="dropdown-user" >
            <div className="link-container">
              <Link style={{ textDecoration: 'none' }} to="/edit-profile"><h6>Editeaza profil</h6></Link>
            </div>
            <div
              onClick={() => handleLogout()}
              className="link-container">
              <Link style={{ textDecoration: 'none' }} to="/home"><h6>Log out</h6></Link>
            </div>
          </div>}
        </div>
      </div>
    </div>
  </div>
}

export default Nav