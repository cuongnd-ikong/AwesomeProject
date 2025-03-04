import { all } from 'redux-saga/effects';
import { watchProduct } from './product';
export { actionProduct } from './product';

export const rootSaga = function* () {
    yield all([watchProduct()]);
};
