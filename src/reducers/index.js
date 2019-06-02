import { combineReducers } from 'redux';
import {createResponsiveStateReducer} from 'redux-responsive'
import {transform} from 'lodash'

import articleReducer from './articleReducer';
import chosenArticle from './chosenArticle';
import searchInput from './searchInput';
import searchResults from './searchResults';
import clickedSection from './clickedSection';


export default combineReducers({
  searchResults: searchResults,
  searchInput: searchInput,
  articles: articleReducer,
  chosenArticle: chosenArticle,
  clickedSection: clickedSection,
  browser: createResponsiveStateReducer({
        small: 375,
        // small: 700,
        medium: 1100,
        // large: 770,
        // extraLarge: 1400,
        infinity: "veryBig",
        extraFields: ({ greaterThan, is }) => ({
          greaterThanOrEqual: transform(greaterThan, (result, value, mediaType) => {
            result[mediaType] = value || is[mediaType]
            }, {})
        }),
    }),
})
