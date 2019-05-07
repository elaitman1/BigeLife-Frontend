import React from 'react'
import { connect } from 'react-redux';
import { fetchArticles, chosenArticle } from '../actions';
// import './App.css'

class ViewChosenArticle extends React.Component{

  state = {
    youMayAlsoLike: []
  }

  handleClick = (event) =>{
    let clickedId = parseInt(event.currentTarget.id)
    this.props.chosenArticle(this.props.articles[clickedId])

    this.props.history.push('/viewchosenarticletwo');
  }


  randomArticle = (arr, n) => {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    this.setState({youMayAlsoLike:result})
  }



  randomArticlesArray = () => {
    let array = []
    for (let props in this.props.articles){

      if (props !== "chosenArticle" && props !== this.props.articles.chosenArticle.id){
        array.push(this.props.articles[props])
      }
    }

    return array
  }



  componentDidMount() {

    this.randomArticle(this.randomArticlesArray(), 2)

  }

  render()  {
    return (
      <div>
      <img src={this.props.image} />
      {this.props.title }<br />
      {this.props.author}<br />
      {this.props.content}
      <h1>You May Also Like</h1>
      <div>{this.state.youMayAlsoLike.map(article=>{
      return  <div  onClick={this.handleClick} id={article.id}>
        <img src={article.image} /><br />
        <div>{article.title}</div><br />
        <div>{article.author}</div><br />

        </div>
      })}
      </div>
      </div>
    )
  }
}

const mapStateToProps =
 (state, ownProps) => {

   if (state.articles.length !== 0){
     return {
       title: state.articles.chosenArticle.title,
       image: state.articles.chosenArticle.image,
       content: state.articles.chosenArticle.content,
       author: state.articles.chosenArticle.author,
       articles: state.articles
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
