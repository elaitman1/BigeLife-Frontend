import React from 'react'
import { connect } from 'react-redux';
import { fetchArticles, chosenArticle } from '../actions';
import './App.css'

class ViewChosenArticle extends React.Component{

  state = {
    youMayAlsoLike: []
  }

  handleClick = (event) =>{
    let clickedId = parseInt(event.currentTarget.id)
    let foundArticle = this.props.articles.find(article=>article.id === clickedId)
    this.props.chosenArticle(foundArticle)

    this.props.history.push('/viewchosenarticletwo');
  }


  randomArticle = () => {
    console.log(this.props.chosenArticle)
    let allOtherArticles =  this.props.articles.filter(article => article.id !== this.props.chosenArticleId)

    let  results = allOtherArticles
    .sort(function() { return .5 - Math.random() }) // Shuffle array
    .slice(0, 2); // Get first 2 items

    let pickedOne = results[0];
    let pickedTwo = results[1];
    this.setState({youMayAlsoLike:[pickedOne, pickedTwo]})
  }



  componentDidMount() {

    this.randomArticle()

  }

  render()  {

    return (
      <div>
      <img src={this.props.image} />
      {this.props.title }<br />
      {this.props.author}<br />
      {this.props.content}
      <h1 className='mayAlsoLike'>You May Also Like</h1>
      <div>{this.state.youMayAlsoLike.map(article=>{
      return  <div  onClick={this.handleClick} id={article.id}>
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

   if (state.chosenArticle !== undefined){

     return {
       title: state.chosenArticle.title,
       image: state.chosenArticle.image,
       content: state.chosenArticle.content,
       author: state.chosenArticle.author,
       articles: state.articles,
       tag: state.chosenArticle.tag,
       chosenArticleId: state.chosenArticle.id
     };
   }else{
    return {
      title: 'The boy who cried wolf',
      image: 'http://news.mit.edu/sites/mit.edu.newsoffice/files/styles/news_article_image_top_slideshow/public/images/2016/MIT-Earth-Dish_0.jpg?itok=RIq4yhsU',
      content: "Sing the best of songs",
      author: 'Eric Laitman',
      articles: {23:
        {author: "Trent Hahn MD",
        content: "To provide an exceptional dining experience that satisfies our guests’ grown-up tastes by being a Cut-Above in everything we do.",
        id: 23,
        image: "https://energy.hawaii.gov/wp-content/uploads/2013/07/Ocean.png",
        title: "Salty Eatery"},
        24:{author: "Ned Fisher II",
        content: "Our mission has been to help people achieve their health and wellness goals. though weve changed over the years, our values have remained the same.",
        id: 24,
        image: "https://energy.hawaii.gov/wp-content/uploads/2013/07/Ocean.png",
        title: "22 Curry"},
        25:{author: "Ned Fisher II",
        content: "Our mission has been to help people achieve their health and wellness goals. though weve changed over the years, our values have remained the same.",
        id: 25,
        image: "https://energy.hawaii.gov/wp-content/uploads/2013/07/Ocean.png",
        title: "22 Curry"},
        26:{author: "Ned Fisher II",
        content: "Our mission has been to help people achieve their health and wellness goals. though weve changed over the years, our values have remained the same.",
        id: 26,
        image: "https://energy.hawaii.gov/wp-content/uploads/2013/07/Ocean.png",
        title: "22 Curry"},
        chosenArticle:
        {author: "Trent Hahn MD",
        content: "To provide an exceptional dining experience that satisfies our guests’ grown-up tastes by being a Cut-Above in everything we do.",
        id: 23,
        image: "https://energy.hawaii.gov/wp-content/uploads/2013/07/Ocean.png",
        title: "Salty Eatery"}
      }
    }
  }
}

export default connect(
  mapStateToProps,
  { fetchArticles, chosenArticle }
)(ViewChosenArticle);
