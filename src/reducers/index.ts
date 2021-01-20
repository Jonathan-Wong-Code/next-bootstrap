import { combineReducers } from 'redux';
import { testReducer } from './testReducer';

export const rootReducer = combineReducers({
  testState: testReducer,
});
