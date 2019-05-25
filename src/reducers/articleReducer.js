import _ from 'lodash';
import {
  FETCH_ARTICLES,
  SEARCH_INPUT,
  SEARCH_RESULTS,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return action.payload;
    default:
      return state;
  }
};
