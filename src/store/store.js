import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

const initialState = {};
function exampleReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  example: exampleReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;