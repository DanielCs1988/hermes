import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import {Actions, ActionTypes} from "../actions/events";
import {Actions as GlobalActions} from "../actions/global";
import {getCurrentUser, getPeople} from "../reducers/people";
import {getEvent} from "../reducers/events";
import {IdGenerator} from "../../shared/utils";
import * as Api from "./event.api";
import {getToken} from "./auth";
import {IPeople} from "../types";

function* eventSagas() {
    yield takeLatest(ActionTypes.INIT_FETCH_EVENTS, fetchEvents);
    yield takeLatest(ActionTypes.INIT_CREATE_EVENT, createEvent);
    yield takeLatest(ActionTypes.INIT_UPDATE_EVENT, updateEvent);
    yield takeLatest(ActionTypes.INIT_DELETE_EVENT, deleteEvent);
    yield takeEvery(ActionTypes.INIT_TOGGLE_EVENT_PARTICIPATION, toggleParticipation);
}

export function* fetchEvents() {
    try {
        const token = yield call(getToken);
        const events = yield call(Api.fetchEvents, token);
        const people = yield select(getPeople);
        const mappedEvents = yield call(mapAndNormalizeEvents, events, people);
        yield put(Actions.fetchEventsSuccess(mappedEvents));
    } catch (e) {
        yield put(Actions.fetchEventsFailed());
        yield put(GlobalActions.showError('Could not fetch events!'));
    }
}

export function* createEvent(action) {
    const organizer = yield select(getCurrentUser);
    const optRes = {
        ...action.payload,
        id: IdGenerator.generate(),
        createdAt: new Date().getTime(),
        participants: [],
        organizer
    };
    try {
        yield put(Actions.createEvent(optRes));
        const token = yield call(getToken);
        const event = yield call(Api.createEvent, optRes, token);
        const people = yield select(getPeople);
        yield put(Actions.replaceEvent(mapEvent(event, people), optRes.id));
    } catch (e) {
        yield put(Actions.deleteEvent(optRes.id));
        yield put(GlobalActions.showError('Could not create event!'));
    }
}

export function* updateEvent(action) {
    const optRes = action.payload;
    const oldEvent = yield select(getEvent(optRes.id));
    try {
        yield put(Actions.updateEvent(optRes));
        const token = yield call(getToken);
        const event = yield call(Api.updateEvent, optRes, token);
        yield put(Actions.updateEvent({
            ...event,
            image: { uri: event.image },
            organizer: oldEvent.organizer,
            participants: oldEvent.participants
        }));
    } catch (e) {
        yield put(Actions.updateEvent(oldEvent));
        yield put(GlobalActions.showError('Could not updated event!'));
    }
}

export function* deleteEvent(action) {
    const event = action.payload;
    try {
        yield put(Actions.deleteEvent(event.id));
        const token = yield call(getToken);
        yield call(Api.deleteEvent, event.id, token);
    } catch (e) {
        yield put(Actions.createEvent(event));
        yield put(GlobalActions.showError('Could not delete event!'));
    }
}

export function* toggleParticipation(action) {
    const eventId = action.payload;
    const currentUser = yield select(getCurrentUser);
    try {
        yield put(Actions.toggleEventParticipation(eventId, currentUser));
        const token = yield call(getToken);
        yield call(Api.toggleParticipation, eventId, token);
    } catch (e) {
        yield put(Actions.toggleEventParticipation(eventId, currentUser));
        yield put(GlobalActions.showError('Could not change participation!'));
    }
}

export const mapEvent = (event, people) => ({
    ...event,
    image: { uri: event.image },
    organizer: people[event.organizer],
    participants: event.participants
        .map(participant => people[participant])
});

export function* mapAndNormalizeEvents(events, people: IPeople) {
    return events
        .map(event => ({
            [event.id]: mapEvent(event, people)
        }))
        .reduce((acc, next) => ({ ...acc, ...next }), {});
}

export default eventSagas;