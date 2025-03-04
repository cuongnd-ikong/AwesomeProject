import {configureStore, Tuple} from '@reduxjs/toolkit';

import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {thunk} from 'redux-thunk';
// import {AppStorage} from '../localStorage';
import {rootSaga} from './sagas';
import {generalReducer, settingsReducer, userReducer} from './slices';
export * from './slices';

const reducer = combineReducers({
  general: generalReducer,
  user: userReducer,
  settings: settingsReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: reducer,
  middleware: () => new Tuple(thunk, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type IRootState = ReturnType<typeof store.getState>;
export const dispatch = store.dispatch;
export type IAppDispatch = typeof dispatch;
export const useAppDispatch: () => IAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export const loadReduxDataSync = async () => {
  // const [
  // ] = await Promise.all([
  // ]);
  // if (!!user.auth?.token) {
  //     const { isSuccess = false, data: userInfo } = (await api.profileInfo().promise.catch(() => undefined)) || {};
  //     if (!isSuccess) {
  //         // await userServices.logout();
  //     } else {
  //         user.user = userInfo;
  //         dispatch(forceUpdateUser(user));
  //     }
  // } else {
  // }
  // dispatch(forceUpdateDebug(debug));
  // dispatch(forceUpdateSettings(settings));
  // dispatch(forceUpdateGeneral(general));
  // dispatch(forceUpdateBooking(booking || {}));
};
