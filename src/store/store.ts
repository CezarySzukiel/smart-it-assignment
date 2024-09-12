import {createStore, applyMiddleware, combineReducers} from 'redux';
import {thunk} from 'redux-thunk';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;


const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
