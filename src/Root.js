import React, { Component } from 'react';
import { Header, Sidebar } from './components/commons'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'

import './App.css';

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarOpen: true
    }
  }

  handleClick = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    })
  } 

  render() {
    return (
      <BrowserRouter>
        <div className="app-container">  
          <Header handleClick={this.handleClick}/>
          <div className={`page-layout ${this.state.sidebarOpen ? 'sidebar' : ''}`}>
            {this.state.sidebarOpen && <Sidebar sidebarOpen={this.state.sidebarOpen} />}
            <App />
          </div>    
        </div>
      </BrowserRouter>
    )
  }
}

export default Root;
