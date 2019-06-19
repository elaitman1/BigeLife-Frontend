import React from 'react'
import { connect } from 'react-redux';
import { chosenArticle } from '../actions';
import './Section.css'
class SectionTwo extends React.Component{

  state = {
    youMayAlsoLike: []
  }

  handleClick = (event) =>{
    debugger
    let clickedId = parseInt(event.currentTarget.id)
    let foundArticle = this.props.articles.find(article=>article.id === clickedId)
    this.props.chosenArticle(foundArticle)

    this.props.history.push('/viewchosenarticletwo');
    window.scrollTo(0, 0)
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

  handleClick = (event) => {
    debugger
    this.props.clickedSection(event.target.id)
    if(this.props.location.pathname === '/section'){
      this.props.history.push('/sectiontwo')
    }else if (this.props.location.pathname === '/sectiontwo'){
      this.props.history.push('/section')
    }else if(this.props.location.pathname === '/'){
      this.props.history.push('/section')
    }
  }

  tagArticles = () => {
    let array = []
  {this.props.articles.filter(article=>{
    if (article.tag === this.props.clickedSection){
        array.push(
        <div onClick={this.handleClick} id={article.id}>
        <img id="topimg" src={article.image} /><br />
        <div id='toptitle'> {article.title}</div><br />
        <div id='topauthor'>{article.author}</div><br />
        <div id='toptag'>{article.tag}</div><br />
        </div>
      )
    }})}
    return array
  }

  render()  {
    return (
      <div className='swrapper'>
      {this.tagArticles()}
      <h1 className='mayAlsoLikeSection'>You May Also Like</h1>
      <div>{this.state.youMayAlsoLike.map(article=>{
      return(
        <div onClick={this.handleClick} id={article.id}>
        <img className="secimg" src={article.image}/><br />
        <div className="sectitle">{article.title}</div><br />
        <div className="secauthor">{article.author}</div><br />
        <div className="sectag">{article.tag}</div><br />
        </div>
        )
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
)(SectionTwo);
