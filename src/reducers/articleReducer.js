import _ from 'lodash';
import {
  FETCH_ARTICLES,
  CHOSEN_ARTICLE,
  // FETCH_STREAMS,
  // CREATE_STREAM,
  // EDIT_STREAM,
  // DELETE_STREAM
} from '../actions/types';

export default (state = {
  author: "Eric Laitman",
  title: "Life",
  content: "There goes the cue. Drop the mic and go get it",
  image:"https://energy.hawaii.gov/wp-content/uploads/2013/07/Ocean.png"
}, action) => {
  switch (action.type) {

    case FETCH_ARTICLES:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
      case CHOSEN_ARTICLE:
      return { ...state, chosenArticle: action.payload };
      //map keys will take an array and return an object... create new object. whatever id is use that as key and the value is everything else associated with the object. merges array of objects into one large object
    // case FETCH_STREAM:
    //   return { ...state, [action.payload.id]: action.payload };
    // case CREATE_STREAM:
    //   return { ...state, [action.payload.id]: action.payload };
    // case EDIT_STREAM:
    //   return { ...state, [action.payload.id]: action.payload };
    // case DELETE_STREAM:
    //   return _.omit(state, action.payload);
    //   //lodash library
    default:
      return state;
  }
};

//array based approach
// cont streamReducer = (state=[], action) => {
// switch (action.type) {
//   case EDIT_STREAM:
//     return state.map(stream => {
//       if (stream.id === action.payload.id) {
//         return action.payload;
//       }else{
//         return stream;
//       }
//     })
//     default:
//     return state
// }
// }
