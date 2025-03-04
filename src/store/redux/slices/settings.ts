import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface IStateSetting {}

export let defaultSateSettings: IStateSetting = {};

const slices = createSlice({
  name: 'settings',
  initialState: defaultSateSettings,
  reducers: {
    forceUpdateSettings: (
      state,
      action: PayloadAction<Partial<IStateSetting>>,
    ) => {
      state = {...state, ...action.payload};
      // savedData(state);
      return state;
    },
  },
});
export const {forceUpdateSettings} = slices.actions;
export const settingsReducer = slices.reducer;
