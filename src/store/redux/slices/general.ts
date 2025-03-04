import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import { AppStorage } from '@src/store/localStorage';

export interface IStateGeneral {}
export let defaultSateGeneral: IStateGeneral = {};

const {actions, reducer} = createSlice({
  name: 'general',
  initialState: defaultSateGeneral as IStateGeneral,
  reducers: {
    forceUpdateGeneral: (
      state,
      action: PayloadAction<Partial<IStateGeneral>>,
    ) => {
      state = {...state, ...action.payload};
      // savedData(state);
      return state;
    },
  },
});

export const {forceUpdateGeneral} = actions;
export const generalReducer = reducer;
