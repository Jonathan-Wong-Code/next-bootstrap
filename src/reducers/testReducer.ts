// THIS IS FOR EXAMPLE ONLY
import { TestActions } from '../actions/testActions';

export const testReducer = (state: string, action: TestActions): string => {
  switch (action.type) {
    case 'SET_STATE': {
      return action.state;
    }

    default: {
      return null;
    }
  }
};
