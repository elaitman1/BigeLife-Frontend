import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import HomePage from './HomePage';
import ViewChosenArticle from './ViewChosenArticle';
import Toolbar from './Toolbar/Toolbar'
import SideDrawer from './SideDrawer/SideDrawer'
// import history from '../history';
import Backdrop from './Backdrop/Backdrop'


class App extends React.Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }
  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
          <Router>
                <Route exact path="/" render={props => <HomePage {...props}/>} />
                <Route path="/viewchosenarticle" render={props => <ViewChosenArticle {...props}/>} />
          </Router>
      </div>
    )
  };
}

export default App;
