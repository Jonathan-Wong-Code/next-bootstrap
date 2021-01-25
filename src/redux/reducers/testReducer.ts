// THIS IS FOR EXAMPLE ONLY
import { TestActions } from '../actions/testActions';
import { actionTypes } from '../constants';
const initialState = '';

export const testReducer = (
  state: string = initialState,
  action: TestActions
): string => {
  switch (action.type) {
    case actionTypes.SET_STATE: {
      return action.state;
    }

    default: {
      return state;
    }
  }
};
