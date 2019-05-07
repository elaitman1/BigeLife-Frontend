import React from 'react'
import { connect } from 'react-redux';
// import { searchResults } from '../actions';


class SearchResults extends React.Component{

  handleClick = (event) =>{
    let id = parseInt(event.currentTarget.id)

    let foundArticle = this.props.articles.find(article=>article.id === id)

    this.props.chosenArticle(foundArticle)
    this.props.history.push('/viewchosenarticle');

  }

  renderContent(){
    let object = this.props.results
    for (var key in object){
      return (
        <div id={object[key].id} onClick={this.handleClick}>
        <div id='block'>
        <div id="title">{object[key].title}</div>
        <div id="typetag">{object[key].tag}</div>
        <div className="homepage author">{object[key].author}</div>
        </div>
        <img id="homepage" src={object[key].image}/>
        </div>
      )
    }
  }

  render() {
    return (
      <div>{this.renderContent()}</div>
    )
  }
}



const mapStateToProps =
 (state, ownProps) => {
   debugger
    return {
      results: state.articles.searchResults
    };

  }
//
export default connect(
  mapStateToProps
)(SearchResults);
