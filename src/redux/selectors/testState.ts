import { ReduxState } from '../store';

export const selectTestState = (state: ReduxState): string => state?.testState;
