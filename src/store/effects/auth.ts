import {all, call, put, select, takeLatest} from "redux-saga/effects";
import {Actions, ActionTypes} from "../actions/auth";
import {AsyncStorage} from "react-native";
import {StorageKeys} from "../../shared/constants";
import {getCredentials} from "../reducers/auth";
import {fetchCurrentUser, fetchProfiles} from "./people";

export function* authSagas() {
    yield takeLatest(ActionTypes.INIT_AUTHENTICATE, authenticate);
    yield takeLatest(ActionTypes.INIT_LOGOUT, logout);
}

export function* authenticate(action) {
    const credentials = action.payload;
    const token = credentials.token;
    yield put(Actions.saveCredentials(credentials));
    try {
        yield all([
            call(fetchProfiles, token),
            call(fetchCurrentUser, token)
        ]);
        yield put(Actions.login());
    } catch (error) {
        yield call(alert, 'Cannot load users!');
        yield call(logout);
    }
}

export function* logout() {
    yield call([AsyncStorage, 'multiRemove'], [
        StorageKeys.TOKEN, StorageKeys.EXPIRES_AT
    ]);
    yield put(Actions.logout());
}

export function* getToken() {
    const credentials = yield select(getCredentials);
    if (credentials.expiresAt < new Date().getTime()) {
        yield call(logout);
        throw new Error('Token expired!');
    } else {
        return credentials.token;
    }
}