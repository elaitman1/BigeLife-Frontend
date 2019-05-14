import React from 'react'
import Slider from 'react-slick'
import './HomepageFeatureSlider.css'
import { connect } from 'react-redux';
import { fetchArticles, chosenArticle } from '../actions';


class HomePage extends React.Component{

  state = {
    featuredArticles: []
  }

  componentDidMount = async ()=>{
    // setTimeout(() =>

    await this.props.fetchArticles()
    this.setFeaturedArticles()




  // }, 5000)}
  }

  handleClick = (event) =>{
    let id = parseInt(event.currentTarget.id)

    let foundArticle = this.props.articles.find(article=>article.id === id)

    this.props.chosenArticle(foundArticle)
    this.props.history.push('/viewchosenarticle');
  }

    handleHomePageArticles = () => {

      if (this.props.articles.length === 0){
        return <div>loading...</div>
      }
      let array = []
      let x = this.props.articles.length - 12

      for(let i = this.props.articles.length - 4; i>= x; i-- ){
        array.push(<div id={this.props.articles[i].id} onClick={this.handleClick}>
          <div id='block'>
          <div id="title">{this.props.articles[i].title}</div>
          <div id="typetag">{this.props.articles[i].tag}</div>
          <div className="author">{this.props.articles[i].author}</div>
          </div>
          <img id="homepage" src={this.props.articles[i].image}/>
          </div>
        )
      }
      return array
    }

    setFeaturedArticles = () => {

      if (this.props.articles.length === 0){
        return <div>loading...</div>
      }
      let array = []
      let x = this.props.articles.length - 3
      for(let i = this.props.articles.length - 1; i>= x; i-- ){
        array.push(this.props.articles[i])
      }
      this.setState({featuredArticles: array})

    }

  render() {

    let settings = {
        dots: true,
        infinite: true,
        // autoplay: true,
        useCss: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      }

    return (
        <div>
        {this.state.featuredArticles.length === 0? <div>loading...</div> :
        <Slider {...settings}>
        <div id={this.state.featuredArticles[0].id} onClick={this.handleClick}>
         <div className='fblock'>
         <div className="ftitle">{this.state.featuredArticles[0].title}</div>
         <div className="ftypetag">{this.state.featuredArticles[0].tag}</div>
         <div className="fauthor">{this.state.featuredArticles[0].author}</div>
         <img className="FeatureSlider" src={this.state.featuredArticles[0].image}/>
         </div>
         </div>

         <div id={this.state.featuredArticles[1].id} onClick={this.handleClick}>
          <div className='fblock'>
          <div className="ftitle">{this.state.featuredArticles[1].title}</div>
          <div className="ftypetag">{this.state.featuredArticles[1].tag}</div>
          <div className="fauthor">{this.state.featuredArticles[1].author}</div>
          <img className="FeatureSlider" src={this.state.featuredArticles[1].image}/>
          </div>
          </div>

          <div id={this.state.featuredArticles[2].id} onClick={this.handleClick}>
           <div className='fblock'>
           <div className="ftitle">{this.state.featuredArticles[2].title}</div>
           <div className="ftypetag">{this.state.featuredArticles[2].tag}</div>
           <div className="fauthor">{this.state.featuredArticles[2].author}</div>
           <img className="FeatureSlider" src={this.state.featuredArticles[2].image}/>
           </div>
           </div>
        </Slider>
      }
      {this.handleHomePageArticles()}
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
