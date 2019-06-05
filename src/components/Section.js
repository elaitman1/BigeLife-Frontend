import React from 'react'
import { connect } from 'react-redux';
import { chosenArticle } from '../actions';
import './Section.css'
class Section extends React.Component{

  state = {
    youMayAlsoLike: []
  }

  handleClick = (event) =>{
    let clickedId = parseInt(event.currentTarget.id)
    let foundArticle = this.props.articles.find(article=>article.id === clickedId)
    this.props.chosenArticle(foundArticle)

    this.props.history.push('/viewchosenarticle');
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

  tagArticles = () => {
    let array = []
  {this.props.articles.filter(article=>{
    if (article.tag === this.props.clickedSection){
        array.push(
        <div style={{marginBottom:'13em', marginTop:'7em', marginBottom:'17em'}} onClick={this.handleClick} id={article.id}>
        <img style={{position:'absolute', marginTop:'-2em', height:'20em', marginLeft:'-1em'}}src={article.image} /><br />
        <div style={{position: 'absolute',
        marginTop:'-2em',
        fontSize: '1.2em',
        letterSpacing: '.1em',
        position: 'absolute',
        fontFamily: 'Arial Rounded MT Bold, arial',
        padding: '1%',
        marginLeft: '-.1em',
        borderStyle: 'solid',
        backgroundColor: 'white',
        color: 'black',
        wordWrap: 'break-word',
}}>{article.title}</div><br />
        <div style={{fontSize: '1.3em',
        letterSpacing: '.2em',
        position: 'absolute',
        fontFamily: 'Arial Rounded MT Bold, arial',
        padding: '1%',
        marginTop: '9em',
        marginLeft: '-.1em',
        borderStyle: 'solid',
        borderColor: 'black',
        backgroundColor: 'white',
        color: 'black',
        wordWrap: 'break-word'
}}>{article.author}</div><br />
        <div style={{fontSize:".8em", letterSpacing: ".1em", position:"absolute", fontFamily: "Arial Rounded MT Bold, arial",
        padding: "1%",
        marginLeft: ".5em",
        backgroundColor: "black",
        color: "white",
        wordWrap: "break-word",
        marginTop:'-2.5em',
 }}>{article.tag}</div><br />
        </div>
      )
    }})}
    return array
  }

  render()  {

    return (
      <div className = 'swrapper'>
      {this.tagArticles()}
      <h1 className='mayAlsoLike'>You May Also Like</h1>
      <div>{this.state.youMayAlsoLike.map(article=>{
      return(
      <div className="spacer" onClick={this.handleClick} id={article.id}>
        <img className="simg" src={article.image} /><br />
        <div className="stitle">{article.title}</div><br />
        <div className="sauthor">{article.author}</div><br />
        <div className="stag">{article.tag}</div><br />
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
)(Section);
