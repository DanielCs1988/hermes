import {put, select, takeLatest} from "redux-saga/effects";
import {Actions, ActionTypes} from "../actions/people";
import {Actions as GlobalActions} from "../actions/global";
import {getSelectedProfile} from "../reducers/people";

const people = {
    'asd': {
        id: 'asd',
        givenName: 'John',
        familyName: 'Smith',
        registeredAt: 28000000,
        profilePicture: { uri: 'https://pbs.twimg.com/profile_images/834093730244079616/0um-zqxI_400x400.jpg' },
        email: 'anon@tor.com',
        phone: 'no way',
        address: 'Somewhere hidden',
        birthday: 3123213123
    },
    'qrt': {
        id: 'qrt',
        givenName: 'Jane',
        familyName: 'Smith',
        registeredAt: 58000000,
        profilePicture: { uri: 'https://usercontent2.hubstatic.com/14052231_f520.jpg' }
    }
};

function* peopleSagas() {
    yield takeLatest(ActionTypes.INIT_FETCH_PEOPLE, fetchProfiles);
    yield takeLatest(ActionTypes.INIT_GET_CURRENT_USER_ID, fetchCurrentUser);
    yield takeLatest(ActionTypes.INIT_UPDATE_PROFILE, updateProfile);
}

export function* fetchProfiles() {
    //TODO: !! map image source from string to ImageProp
    try {
        yield put(Actions.fetchPeopleSuccess(people));
    } catch (e) {
        yield put(Actions.fetchPeopleFailed());
        yield put(GlobalActions.showError('Could not fetch profiles!'));
    }
}

export function* fetchCurrentUser() {
    try {
        yield put(Actions.getCurrentUserIdSuccess('asd'));
    } catch (e) {
        yield put(GlobalActions.showError('Could not fetch current user!'));
    }
}

export function* updateProfile(action) {
    const updatedProfile = action.payload;
    const oldProfile = yield select(getSelectedProfile);
    try {
        yield put(Actions.updateProfileSuccess(updatedProfile));
    } catch (e) {
        yield put(Actions.updateProfileFailed(oldProfile));
        yield put(GlobalActions.showError('Could not update profile!'))
    }
}

export default peopleSagas;