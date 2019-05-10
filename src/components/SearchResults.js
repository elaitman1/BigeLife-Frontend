import React from 'react'
import { connect } from 'react-redux';
// import { searchResults } from '../actions';
import { fetchArticles, chosenArticle } from '../actions';


class SearchResults extends React.Component{

  handleClick = (event) => {
    let clickedId = parseInt(event.currentTarget.id)
    let foundArticle = this.props.articles.find(article=>article.id === clickedId)
    this.props.chosenArticle(foundArticle)

    this.props.history.push('/viewchosenarticletwo');
  }

  render() {
    return (
        this.props.searchResults.map(result=>{
        return (
          <div id={result.id} onClick={this.handleClick}>
          <div id='block'>
          <div id="title">{result.title}</div>
          <div id="typetag">{result.tag}</div>
          <div className="homepage author">{result.author}</div>
          </div>
          <img id="homepage" src={result.image}/>
          </div>
        )})
    )
  }
}



const mapStateToProps =
 (state, ownProps) => {
    return {
      searchResults:state.searchResults,
      articles: state.articles
    };

  }
//
export default connect(
  mapStateToProps,
  { fetchArticles, chosenArticle }
)(SearchResults);
