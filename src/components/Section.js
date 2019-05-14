import React from 'react'
import { connect } from 'react-redux';
import { chosenArticle } from '../actions';
import './Section.css'
class Section extends React.Component{

  state = {
    youMayAlsoLike: []
  }

  componentDidMount(){
    let allOtherArticles =  this.props.articles.filter(article => article.tag !== this.props.clickedSection)

    let  results = allOtherArticles
    .sort(function() { return .5 - Math.random() }) // Shuffle array
    .slice(0, 2); // Get first 2 items

    let pickedOne = results[0];
    let pickedTwo = results[1];
    this.setState({youMayAlsoLike:[pickedOne, pickedTwo]})
  }

  tagArticles = () => {
    let array = []
  {this.props.articles.filter(article=>{
    if (article.tag === this.props.clickedSection){
        array.push(
        <div onClick={this.handleClick} id={article.id}>
        <img id="simage" src={article.image} /><br />
        <div className="stitle">{article.title}</div><br />
        <div className="sauthor">{article.author}</div><br />
        <div className="stag">{article.tag}</div><br />
        </div>
      )
    }})}
    return array
  }

  render()  {
    console.log(this.props.articles)

    return (
      <div>
      {this.tagArticles()}
      <h1>You May Also Like</h1>
      <div>{this.state.youMayAlsoLike.map(article=>{
      return  <div onClick={this.handleClick} id={article.id}>
        <img src={article.image} /><br />
        <div>{article.title}</div><br />
        <div>{article.author}</div><br />
        <div>{article.tag}</div><br />
        </div>
      })}
      </div>
      </div>
    )
  }
}

const mapStateToProps =
 (state, ownProps) => {

     return {
       title: state.chosenArticle.title,
       image: state.chosenArticle.image,
       content: state.chosenArticle.content,
       author: state.chosenArticle.author,
       articles: state.articles,
       chosenArticleId: state.chosenArticle.id,
       clickedSection: state.clickedSection
     }
   }

export default connect(
  mapStateToProps,
  { chosenArticle }
)(Section);
