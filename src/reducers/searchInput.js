import React from 'react'
import {
  SEARCH_INPUT
} from '../actions/types';


export default (state = {}, action) => {
  switch (action.type) {
    case SEARCH_INPUT:
      return {...state}, action.payload;
  default:
    return state;
  }
}
