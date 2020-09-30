import todo from './reducers/todo';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

export default combineReducers({
  todo,
  router: routerReducer
});
