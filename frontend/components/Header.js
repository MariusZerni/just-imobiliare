import React from 'react'
import logo from '../images/logo70.png'


const Header = (props) => {

  const { user } = props

  console.log('props', props)

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
      <div className="profile">
        <div className="name">
          <h6>{user ? user : 'Agent' }</h6>
        </div>
        <div className="image">
          <i className="far fa-user fa-2x"></i>
        </div>
      </div>
    </div>

  </div>
}

export default Header