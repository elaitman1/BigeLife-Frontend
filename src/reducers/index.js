import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';//here we rename as formreducer
// import authReducer from './authReducer';

import articleReducer from './articleReducer';
import chosenArticle from './chosenArticle';
import searchInput from './searchInput';
import searchResults from './searchResults';

export default combineReducers({
  // auth: authReducer,
  searchResults: searchResults,
  searchInput: searchInput,
  articles: articleReducer,
  chosenArticle: chosenArticle
});
