import React from 'react'
import { NavLink } from 'react-router-dom'

// icons imports
import overviewIcon from './overview.svg'
import networkIcon from './network.svg'
import userIcon from './user.svg'
import internetIcon from './internet.svg'
import internetIconActive from './internet-2.svg'

const Sidebar = (props) => {
  return (
    <div className='sidebar'>
      <ul className="nav-menu">
        <li>
          <NavLink exact to="/" activeClassName="active">
            <img className="icon inactive-icon" src={overviewIcon} alt="..." />
            <img className="icon active-icon" src={overviewIcon} alt="..." />
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/network" activeClassName="active">
            <img className="icon inactive-icon" src={networkIcon} alt="..." />
            <img className="icon active-icon" src={networkIcon} alt="..." />
            Network
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/internet" activeClassName="active">
            <img className="icon inactive-icon" src={internetIcon} alt="..." />
            <img className="icon active-icon" src={internetIconActive} alt="..." />
            Internet
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/user" activeClassName="active">
            <img className="icon inactive-icon" src={userIcon} alt="..." />
            <img className="icon active-icon" src={userIcon} alt="..." />
            User
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;