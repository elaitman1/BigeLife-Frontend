import history from '../history'

import {
  // SIGN_IN,
  // SIGN_OUT,
  CREATE_ARTICLE,
  CHOSEN_ARTICLE,
  FETCH_ARTICLES,
  SEARCH_INPUT,
  SEARCH_RESULTS,
  CLICKED_SECTION
} from './types';


export const fetchArticles = () => async dispatch => {

  // const response = await baseUrl.get('/articles');
  await fetch('http://localhost:3000/api/v1/articles')
  .then(r=> r.json())
  .then(r=>{
    dispatch({ type: FETCH_ARTICLES, payload: r });
  })
};

export const createArticle = async(title, author, tag, image, content) => async dispatch => {

  await fetch('http://localhost:3000/api/v1/articles', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: title,
        author: author,
        tag: tag,
        image: image,
        content: content
      })
    })
    .then(r=>r.json())
    .then(r=>{
      dispatch({ type: CREATE_ARTICLE, payload: r });
    })
  }

export const chosenArticle = article => {

  return {
    type: CHOSEN_ARTICLE,
    payload: article
  }
}
export const searchInput = value => {
  return {
    type: SEARCH_INPUT,
    payload: value
  }
}
export const searchResults = (value) => {
  return  {
    type: SEARCH_RESULTS,
    payload: value
  }
}

export const clickedSection = (value) => {
  
  return  {
    type: CLICKED_SECTION,
    payload: value
  }
}
