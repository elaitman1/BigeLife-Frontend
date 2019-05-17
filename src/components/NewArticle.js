import React from 'react'
import { connect } from 'react-redux';
import { fetchArticles, createArticle } from '../actions';

import './NewArticle.css'

class newArticle extends React.Component {

  state = {
    title: "",
    author: "",
    content: "",
    image: "",
    tag: ""
  }

  handleSubmit= async (event) => {
    event.preventDefault()
    await fetch('http://localhost:3000/api/v1/articles', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          title: this.state.title,
          author: this.state.author,
          tag: this.state.tag,
          image: this.state.image,
          content: this.state.content
        })
      })
      .then(r=>{
        this.props.history.push('/')
      })
  }

  handleChange = (event) => {
      this.setState({
        [event.target.placeholder]: event.target.value
      })
    }

  render() {
    return (
      <div className='newArticleWrapper'>
      <form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} id='newArticleForm' placeHolder='title' />
      <input onChange={this.handleChange}id='newArticleForm' placeHolder='author' />
      <input onChange={this.handleChange}id='newArticleForm' placeHolder='tag' />
      <input onChange={this.handleChange}id='newArticleForm' placeHolder='image' />
      <textarea onChange={this.handleChange}id='contentBox' placeHolder='content' />
      <button className="newButton" type='submit'>Submit</button>
      </form>
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
  { fetchArticles, createArticle }
)(newArticle);
