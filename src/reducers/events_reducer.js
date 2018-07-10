import _ from 'lodash';
import { FETCH_EVENTS } from '../actions';


//export default function with empty state and action as args
//switch with action.type as arg, return state as default 

export default function(state = {}, action) {

  switch(action.type) {
    
    case FETCH_EVENTS:
      return _.mapKeys(action.payload.data, "id");

    default: 
      return state;
  }
}