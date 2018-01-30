import { call, put, takeLatest, fork, all } from 'redux-saga/effects';

import * as api from './../services/api';
import * as ActionType from './../constants/ActionType';

function* fetchLogin(action) {
    try {
        const message = yield call(api.loginApi, action.data);
        yield put({ type: ActionType.LOGIN_RESPONSE, message });
    } catch (e) {
        yield put({ type: ActionType.LOGIN_FAILED, message: e.message });
    }
}

function* login() {
    yield takeLatest(ActionType.LOGIN_REQUEST, fetchLogin);
}

export default function* root() {
    yield fork(login);
}
