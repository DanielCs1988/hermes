import {call, put, select, takeLatest} from "redux-saga/effects";
import {Actions, ActionTypes} from "../actions/people";
import {Actions as GlobalActions} from "../actions/global";
import {getSelectedProfile} from "../reducers/people";
import * as Api from "./people.api";
import {normalize} from "../../shared/utils";
import {getToken} from "./auth";

function* peopleSagas() {
    yield takeLatest(ActionTypes.INIT_UPDATE_PROFILE, updateProfile);
}

export function* fetchProfiles(token: string) {
    const profiles = yield call(Api.fetchProfiles, token);
    yield put(Actions.fetchPeopleSuccess(normalize(profiles)));
}

export function* fetchCurrentUser(token: string) {
    const currentUserId = yield call(Api.fetchCurrentUser, token);
    yield put(Actions.getCurrentUserIdSuccess(currentUserId));
}

export function* updateProfile(action) {
    const oldProfile = yield select(getSelectedProfile);
    const updatedProfile = {
        ...oldProfile,
        ...action.payload
    };
    try {
        const token = yield call(getToken);
        const response = yield call(Api.updateProfile, updatedProfile, token);
        yield put(Actions.updateProfileSuccess(response));
    } catch (e) {
        yield put(Actions.updateProfileFailed(oldProfile));
        yield put(GlobalActions.showError('Could not update profile!'))
    }
}

export function* updateOnlineUserList(userIdList: string[]) {
    yield put(Actions.updateOnlineUsers(userIdList));
}

export default peopleSagas;