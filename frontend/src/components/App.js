import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Categories from './Categories';

import Header from './Header/';

import SideNav from './SideNav';
import PlusButton from './PlusButton';


import '../App.css';

class App extends Component {

  state = {
    onMenuClicked: false
  }

  onMenuClick = () => {
    this.setState({
      onMenuClicked: !this.state.onMenuClicked
    })
  }

  render() {
    let sideNavClass = ['Side-Nav', 'Side-Nav-Hide']
    let postsClass = ['Post-Container']

    if (this.state.onMenuClicked) {
      sideNavClass = ['Side-Nav', 'Side-Nav-Show']
      postsClass = ['Post-Container-Show']
    }

    return (
      <div className="App">
        <Header 
          onMenuClick={this.onMenuClick}
          menuClicked={this.state.onMenuClicked}
        />
        <div className='Container'>
          <SideNav sideNavClass={sideNavClass} />
          <div className={postsClass.join(' ')}>
            
          </div>
          <PlusButton />
        </div>
      </div>
    );
  }
}

export default App;
