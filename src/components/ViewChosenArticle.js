import React from 'react'
import { connect } from 'react-redux';
import { fetchArticles, chosenArticle } from '../actions';
import './App.css'

class ViewChosenArticle extends React.Component{

  render() {
    return (
      <div>
      hi
      </div>
    )
  }
}

const mapStateToProps =
 (state, ownProps) => {
   
    return {
      // articles: Object.values(state.articles),
    };
  }


export default connect(
  mapStateToProps,
  { fetchArticles }
)(ViewChosenArticle);
