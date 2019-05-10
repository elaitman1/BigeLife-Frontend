import React from 'react'
import {
  CHOSEN_ARTICLE
} from '../actions/types';


export default (state = {}, action) => {
  switch (action.type) {
    case CHOSEN_ARTICLE:
      return {...state}, action.payload;
  default:
    return state;
  }
}
