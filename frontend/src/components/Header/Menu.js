import React from 'react'
import PropTypes from 'prop-types'

const Menu = (props) => {
  return(
    <div 
      className='Menu-Container'
      onClick={props.onMenuClick}>
      <div className='Menu'>
        <div className='Menu-Middle'>
        </div>
      </div>
    </div>
  )
}

Menu.PropTypes = {
  onMenuClick: PropTypes.func.isRequired
}

export default Menu
