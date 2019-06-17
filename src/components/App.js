import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import history from '/Users/ericlaitman/redux2/BigeLife-Frontend/src/history.js'
import { connect } from 'react-redux';
import Logo from './Logo'
import Date from './Date'
import SectionTwo from './SectionTwo'
import Section from './Section'
import NewArticle from './NewArticle'
import HomePage from './HomePage';
import ViewChosenArticle from './ViewChosenArticle';
import ViewChosenArticleTwo from './ViewChosenArticleTwo';
import Toolbar from './Toolbar/Toolbar'
import SideDrawer from './SideDrawer/SideDrawer'
import Footer from './Footer/Footer.js'
import Backdrop from './Backdrop/Backdrop'
import SearchResults from './SearchResults'


class App extends React.Component {
  state = {
    sideDrawerOpen: false,
    // clickedSection: ''
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
    // console.log(this.state.clickedSection)
    let backdrop;
    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div>
      <Router >
        <div>
                <Route render={props =><Logo {...props}/>}/>
                <Route render={props =><Date {...props}/>}/>
                <Route render={props => <Toolbar {...props} drawerClickHandler={this.drawerToggleClickHandler}/>}/>
                <Route render={props =><SideDrawer {...props} drawerClickHandler={this.drawerToggleClickHandler} show={this.state.sideDrawerOpen}/>}/>
                {backdrop}
                <Route exact path="/" render={props => <HomePage {...props}/>} />
                <Route path="/viewchosenarticle" render={props => <ViewChosenArticle {...props}/>} />
                <Route path="/viewchosenarticletwo" render={props => <ViewChosenArticleTwo {...props}/>} />
                <Route path="/searchresults" render={props => <SearchResults {...props}/>} />
                <Route path="/newarticle" render={props => <NewArticle {...props}/>} />
                <Route path="/section" render={props => <Section {...props}/>} />
                <Route path="/sectiontwo" render={props => <SectionTwo {...props}/>} />
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
