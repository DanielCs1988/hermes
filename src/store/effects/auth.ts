import {call, put, takeLatest} from "redux-saga/effects";
import {Actions, ActionTypes} from "../actions/auth";
import {AsyncStorage} from "react-native";
import {StorageKeys} from "../../shared/constants";

export function* authSagas() {
    yield takeLatest(ActionTypes.INIT_LOGOUT, logout);
}

export function* logout() {
    yield call([AsyncStorage, 'multiRemove'], [
        StorageKeys.TOKEN, StorageKeys.EXPIRES_AT
    ]);
    yield put(Actions.logout());
}