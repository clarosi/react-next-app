import * as actionTypes from './actions/actionTypes';
import rootReducer from './reducers/';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  imgUrl: 'https://media.licdn.com/dms/image/C5103AQH5WDn7Y5ImIQ/profile-displayphoto-shrink_100_100/0?e=1548892800&v=beta&t=crZ-OQoJpS37yPA7j-r4Vpd8TKzrTT3bYJaGpQRM-Jk'
};

export function initializeStore (initialState = initialState) {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
};