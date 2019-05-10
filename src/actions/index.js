import history from '../history'

import {
  // SIGN_IN,
  // SIGN_OUT,
  // CREATE_STREAM,
  CHOSEN_ARTICLE,
  FETCH_ARTICLES,
  SEARCH_INPUT,
  SEARCH_RESULTS,
  // DELETE_STREAM,
  // EDIT_STREAM
} from './types';


export const fetchArticles = () => async dispatch => {
  // const response = await baseUrl.get('/articles');
  await fetch('http://localhost:3000/api/v1/articles')
  .then(r=> r.json())
  .then(r=>{

    dispatch({ type: FETCH_ARTICLES, payload: r });
  })
};

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

// export const filterSearch = () => {
//
// }
