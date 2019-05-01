import React from 'react'
import { connect } from 'react-redux';
import { fetchArticles, chosenArticle } from '../actions';
import './App.css'
import history from '../history'

class HomePage extends React.Component{

  componentDidMount(){
    this.props.fetchArticles()
  }

  handleClick = (event) =>{


    const articleName = event.currentTarget.children[0].childNodes[0].innerText
    this.props.history.push('/viewchosenarticle');

    let foundArticle = this.props.articles.find(article=>article.title === articleName)

    this.props.chosenArticle(foundArticle)


  }

  render() {
    return (
      <div>
      {this.props.articles.map(article=>{
        return <div onClick={this.handleClick}>
        <div id='block'>
        <div id="author">{article.title}</div>
        <div className="homepage author">{article.author}</div>
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
      articles: Object.values(state.articles)
    };
  }


export default connect(
  mapStateToProps,
  { fetchArticles, chosenArticle }
)(HomePage);
