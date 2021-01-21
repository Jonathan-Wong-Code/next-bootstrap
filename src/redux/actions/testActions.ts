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

export type TestActions = ISetStateAction; // Add | NextAction | NextAction
