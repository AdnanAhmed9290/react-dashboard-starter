import React from 'react'

import logo from './logo.png'

const Header = (props) => {

  const { handleClick } = props

  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo"/>
      <button className="menu-btn" onClick={handleClick}><i className="fas fa-bars"></i></button>
      <div className="search-bar">
        <input type="text" />
        <span className="search-icon"><i className="fas fa-search"></i></span>
      </div>
    </div>
  )
}

export default Header;