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
   debugger
   if(state.articles.content === "There goes the cue. Drop the mic and go get it"){
     return {
       title: state.articles.title,
       image: state.articles.image,
       content: state.articles.content,
       author: state.articles.author
     }
   }else{
    return {
      title: state.articles.chosenArticle.title,
      image: state.articles.chosenArticle.image,
      content: state.articles.chosenArticle.content,
      author: state.articles.chosenArticle.author
    };
  }
}


export default connect(
  mapStateToProps,
  { fetchArticles, chosenArticle }
)(ViewChosenArticle);
