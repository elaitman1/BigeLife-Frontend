import React from 'react'
import { connect } from 'react-redux';
import './Toolbar.css'
import { Redirect } from "react-router-dom";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import { searchInput, searchResults } from '/Users/ericlaitman/redux2/BigeLife-Frontend/src/actions/index.js'
import SearchResults from '/Users/ericlaitman/redux2/BigeLife-Frontend/src/components/SearchResults.js'
import history from '/Users/ericlaitman/redux2/BigeLife-Frontend/src/history.js';

class toolbar extends React.Component{

  handleSubmit = (event) => {
      event.preventDefault()
      let array = []
      let search = this.props.Search
      let stateArray = this.props.Articles

      stateArray.filter(object=>{

        if(object.author.toLowerCase().includes(search.toLowerCase()) || object.content.toLowerCase().includes(search.toLowerCase()) || object.title.toLowerCase().includes(search.toLowerCase()))
          {
              array.push(object)
            }
          })




      //no duplicates in the search
      // let newArray = []
      // const map = new Map()
      // for (const item of array){
      //   if(!map.has(item.id)){
      //     map.set(item.id, true);
      //     newArray.push({
      //       id: item.id,
      //       name: item.title,
      //       author: item.author,
      //       content: item.content
      //     })
      //   }
      // }
      this.props.searchResults(array)
      this.props.history.push('/searchresults')
      event.target.reset()
      return array
    }


  render(){
    return (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
      <DrawerToggleButton click={this.props.drawerClickHandler}/>
      </div>
      <div className="toolbar_logo"><a href="/">BigELife</a></div>
      <div className="spacer"></div>
      <div className="Search filter">
      <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={event => {this.props.searchInput( event.target.value )}}
      placeHolder="Search"/>
      <button id='searchbutton' type='submit'/>
      </form>
      </div>
      <div className="toolbar_navigation-items">
        <ul>
          <li><a href="/">Products</a></li>
          <li><a href="/">Users</a></li>
        </ul>
      </div>
    </nav>
  </header>
)
}
}



const mapStateToProps =
 (state, ownProps) => {
    return {
      Search: state.searchInput,
      Articles: state.articles
    };
  }

export default connect(
  mapStateToProps,
  { searchInput, searchResults }
)(toolbar);
