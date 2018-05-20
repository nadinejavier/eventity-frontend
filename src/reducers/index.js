import {combineReducers} from 'redux';
import EventsReducer from './events_reducer';

const rootReducer = combineReducers({
  events: EventsReducer
});


export default rootReducer;

