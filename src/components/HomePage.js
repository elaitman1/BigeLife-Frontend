import React from 'react'
import { connect } from 'react-redux';
import { fetchArticles, chosenArticle } from '../actions';
import history from '../history'
class HomePage extends React.Component{

  componentDidMount(){
    // setTimeout(() => {
      this.props.fetchArticles()
  // }, 5000)}
}

  handleClick = (event) =>{
    let id = parseInt(event.currentTarget.id)

    let foundArticle = this.props.articles.find(article=>article.id === id)

    this.props.chosenArticle(foundArticle)
    this.props.history.push('/viewchosenarticle');

  }

  render() {
    return (
      <div>
      {this.props.articles.map(article=>{
        return <div id={article.id} onClick={this.handleClick}>
        <div id='block'>
        <div id="title">{article.title}</div>
        <div id="typetag">{article.tag}</div>
        <div className="author">{article.author}</div>

        </div>
        <img id="homepage" src={article.image}/>
        </div>
      })}
      </div>
    )
  }
}


const mapStateToProps =
 (state, ownProps) => {
     return {
       articles: Object.values(state.articles),
       vals: Object.keys(state.articles)
     };
   }



export default connect(
  mapStateToProps,
  { fetchArticles, chosenArticle }
)(HomePage);
