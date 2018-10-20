import {put, select, takeLatest} from "redux-saga/effects";
import {Actions, ActionTypes} from "../actions/events";
import {Actions as GlobalActions} from "../actions/global";
import {IEvent} from "../../shared/models";
import {getCurrentUser, initialState as people} from "../reducers/people";
import {getEvent} from "../reducers/events";

export const events: IEvent[] = [
    {
        id: 'id1',
        title: 'Crazy GOA party',
        description: 'Lorem ipsum etc.',
        image: { uri: 'https://i.pinimg.com/originals/b0/b7/b1/b0b7b114b759f274c704f83637254790.jpg' },
        createdAt: 1539542632486,
        from: 1542236400000,
        to: 1542322800000,
        location: {
            name: 'Somewhere',
            latitude: 47.4924430302,
            longitude: 19.0527914555
        },
        organizer: people.people['asd'],
        participants: [people.people['asd'], people.people['qrt']]
    },
    {
        id: 'id2',
        title: 'Grill party',
        description: 'Lorem ipsum etc.',
        image: { uri: 'https://www.hoteltokert.hu/media/k2/items/cache/954fb0ebf1d84fb921bfb0b6e045d57f_XL.jpg' },
        createdAt: 1539542632486,
        from: 1542236400000,
        to: 1542322800000,
        location: {
            name: 'Somewhere else',
            latitude: -40.3434234234,
            longitude: 65.4324234423
        },
        organizer: people.people['qrt'],
        participants: [people.people['asd'], people.people['qrt']]
    }
];

// TODO: Redirects after stuff

export function* eventSagas() {
    yield takeLatest(ActionTypes.INIT_FETCH_EVENTS, fetchEvents);
    yield takeLatest(ActionTypes.INIT_SELECT_EVENT, selectEvent);
    yield takeLatest(ActionTypes.INIT_CREATE_EVENT_FORM, initCreateEventForm);
    yield takeLatest(ActionTypes.INIT_CREATE_EVENT, createEvent);
    yield takeLatest(ActionTypes.INIT_UPDATE_EVENT, updateEvent);
    yield takeLatest(ActionTypes.INIT_DELETE_EVENT, deleteEvent);
}

export function* fetchEvents() {
    try {
        yield put(Actions.fetchEventsSuccess(events));
    } catch (e) {
        yield put(Actions.fetchEventsFailed());
        yield put(GlobalActions.showError(e.message));
    }
}

export function* selectEvent(action) {
    const event = action.payload;
    yield put(Actions.selectEvent(event));
}

export function* initCreateEventForm() {
    yield put(Actions.clearSelection());
}

export function* createEvent(action) {
    const organizer = yield select(getCurrentUser);
    const event = {
        ...action.payload,
        id: '',  // TODO: generator to generate id
        participants: [],
        organizer
    };
    try {
        yield put(Actions.createEventOptRes(event));
    } catch (e) {
        yield put(Actions.createEventFailed(''));
        yield put(GlobalActions.showError(e.message));
    }
}

export function* updateEvent(action) {
    const updatedEvent = action.payload;
    const oldEvent = yield select(getEvent(updatedEvent.id));
    try {
        yield put(Actions.updateEventSuccess(updatedEvent));
    } catch (e) {
        yield put(Actions.updateEventFailed(oldEvent));
        yield put(GlobalActions.showError(e.message));
    }
}

export function* deleteEvent(action) {
    const event = action.payload;
    try {
        yield put(Actions.deleteEventSuccess(event.id));
    } catch (e) {
        yield put(Actions.deleteEventFailed(event));
        yield put(GlobalActions.showError(e.message));
    }
}