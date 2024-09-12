import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;


const store = configureStore({
  reducer: {
    users: usersReducer,
  },
})

export default store;
