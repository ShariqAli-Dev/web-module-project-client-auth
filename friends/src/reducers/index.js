import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { loginReducer } from './login.reducer';
import { friendsReducer } from './friends.reducer';
const rootReducer = combineReducers({
  friendsReducer: friendsReducer,
  loginReducer: loginReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
