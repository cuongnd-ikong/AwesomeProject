import {PayloadAction, createSlice} from '@reduxjs/toolkit';

// export interface IStateUser {
//     auth?: {
//         token: string;
//         refreshToken?: string;
//     };
//     user?: IUser;
//     remember?: boolean;
//     loginHistories: (IFormLogin & { date: Date })[];
// }

// export let defaultSateUser: IStateUser = {
//     loginHistories: [],
// };
// const savedData = (state: IStateUser) => {
//     AppStorage.setUserAuthorize(
//         Object.fromEntries(
//             [
//                 'auth',
//                 'user',
//                 'loginHistories',
//                 'remember',
//                 //
//             ].map(k => [k, state[k as keyof typeof state]]),
//         ),
//     ).then();
// };

const slices = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    forceUpdateUser: (state, action: PayloadAction<Partial<any>>) => {
      state = {...state, ...action.payload};
      // savedData(state);
      return state;
    },
  },
});

export const userReducer = slices.reducer;
export const {forceUpdateUser} = slices.actions;
