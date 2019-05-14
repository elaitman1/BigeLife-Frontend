import React from 'react'
import {
  CLICKED_SECTION
} from '../actions/types';


export default (state = {}, action) => {
  switch (action.type) {
    case CLICKED_SECTION:
      return {...state}, action.payload;
  default:
    return state;
  }
}
