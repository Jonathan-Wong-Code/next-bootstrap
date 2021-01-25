import { actionTypes } from '../constants';

interface ISetStateAction {
  type: actionTypes.SET_STATE;
  state: string;
}

export const setStateAction = (state: string): ISetStateAction => {
  return {
    type: actionTypes.SET_STATE,
    state,
  };
};

// Keep a list of all action interfaces here to export and use in the reducer file.
export type TestActions = ISetStateAction; // Add | NextAction | NextAction
