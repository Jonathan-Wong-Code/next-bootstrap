// THIS IS FOR EXAMPLE ONLY
import { TestActions } from '../actions/testActions';

const initialState = '';

export const testReducer = (
  state: string = initialState,
  action: TestActions
): string => {
  switch (action.type) {
    case 'SET_STATE': {
      return action.state;
    }

    default: {
      return state;
    }
  }
};
