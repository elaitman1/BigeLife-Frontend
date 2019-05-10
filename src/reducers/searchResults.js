import React from 'react'
import {
  SEARCH_RESULTS
} from '../actions/types';


export default (state = {}, action) => {
  switch (action.type) {
  case SEARCH_RESULTS:
    return (
      action.payload
    );
  default:
    return state;
  }
}
