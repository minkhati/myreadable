import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'
import Name from './Name'

import './Header.css'

class Header extends Component {
  render() {
    return(
      <div className="Header">
        <div className="Menu-Name-Container">
          <Menu 
            onMenuClick={this.props.onMenuClick} />
          <Name name='My Readable'/>
        </div>
      </div>
    )
  }
}

export default Header

