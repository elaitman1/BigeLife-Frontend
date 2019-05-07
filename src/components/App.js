import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import HomePage from './HomePage';
import ViewChosenArticle from './ViewChosenArticle';
import ViewChosenArticleTwo from './ViewChosenArticleTwo';
import Toolbar from './Toolbar/Toolbar'
import SideDrawer from './SideDrawer/SideDrawer'
import Footer from './Footer/Footer.js'
import Backdrop from './Backdrop/Backdrop'
import SearchResults from './SearchResults'
// <div style={{height: '100%'}}>


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
      <div>
      <Router >
        <div >
                <Route render={props => <Toolbar {...props} drawerClickHandler={this.drawerToggleClickHandler}/>}/>
                <Route render={props =><SideDrawer show={this.state.sideDrawerOpen}/>}/>
                {backdrop}
                <Route exact path="/" render={props => <HomePage {...props}/>} />
                <Route path="/viewchosenarticle" render={props => <ViewChosenArticle {...props}/>} />
                <Route path="/viewchosenarticletwo" render={props => <ViewChosenArticleTwo {...props}/>} />
                <Route path="/searchresults" render={props => <SearchResults {...props}/>} />
            </div>
          </Router>
          <Footer />
          </div>
    )
  };
}
export default App
// const mapStateToProps = (state, ownProps) => {
//   debugger
//   return {
//     content: state.articles.content
//   }
// }
//
// export default connect(
//   mapStateToProps
// )(App);
