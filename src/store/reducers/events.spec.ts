import reducer, {getSelectedEvent, initialState} from "./events";
import { Actions, EventActions } from "../actions/events";
import { EventState } from "../types";
import {event1, event2, events, people} from "./seed";

describe('Events Reducer', () => {

    let defaultState: EventState;

    beforeEach(() => {
        defaultState = {
            ...initialState
        };
    });

    it('should return default state on invalid action', () => {
        expect(reducer(defaultState, {} as EventActions)).toEqual(defaultState);
    });

    describe('when initiating event fetching', () => {
        const action = Actions.initFetchEvents();

        it('should set loading to true', () => {
            expect(reducer(defaultState, action)).toEqual({
                ...defaultState, loading: true
            });
        });
    });

    describe('when fetched events arrive', () => {
        const action = Actions.fetchEventsSuccess(events);

        it('should cancel loading', () => {
            expect(reducer({
                ...defaultState, loading: true
            }, action).loading).toBe(false);
        });

        it('should set fetched to true', () => {
            expect(reducer(defaultState, action).fetched).toBe(true);
        });

        it('should save the events', () => {
            expect(reducer(defaultState, action).events).toEqual(events);
        });
    });

    describe('when fetching events fail', () => {
        const action = Actions.fetchEventsFailed();

        it('should set loading to false', () => {
            expect(reducer({
                ...defaultState, loading: true
            }, action)).toEqual(defaultState);
        });
    });

    describe('when selecting an event', () => {
        const action = Actions.selectEvent(event1);

        it('should save the selected event id to the state', () => {
            expect(reducer(defaultState, action)).toEqual({
                ...defaultState, selectedEvent: event1
            });
        });
    });

    describe('when clearing event selection', () => {
        const action = Actions.clearSelection();

        it('should set the selected event to null', () => {
            expect(reducer({
                ...defaultState, selectedEvent: event1
            }, action)).toEqual(defaultState);
        });
    });

    describe('creating optimistic response for a new event', () => {
        const action = Actions.createEventOptRes(event1);

        it('should add it to the list of events and the selected event', () => {
            expect(reducer({
                ...defaultState, events: [event2], selectedEvent: null
            }, action)).toEqual({
                ...defaultState, events: [event2, event1], selectedEvent: event1
            });
        });
    });

    describe('when the server sends back the new event', () => {
        const realEvent = { ...event1, id: 'realId', createdAt: 12345 };
        const action = Actions.createEventSuccess(realEvent, event1.id);

        it('should overwrite the optimistic response with the real event in both the list and the selected event', () => {
            expect(reducer({
                ...defaultState, events: [event2, event1], selectedEvent: event1
            }, action)).toEqual({
                ...defaultState, events: [event2, realEvent], selectedEvent: realEvent
            })
        });
    });

    describe('when the server sends back an error to a new event request', () => {
        const action = Actions.createEventFailed(event1.id);

        it('should remove the optimistic response', () => {
            expect(reducer({
                ...defaultState, events: [event2, event1]
            }, action)).toEqual({
                ...defaultState, events: [event2]
            })
        });
    });

    describe('when updating an event with optimistic or server response', () => {
        const updatedEvent = { ...event2, title: 'changed', from: 123, to: 456 };
        const action = Actions.updateEventSuccess(updatedEvent);

        it('should update the events list and the selected event', () => {
            expect(reducer({
                ...defaultState, events: [event1, event2], selectedEvent: event2
            }, action)).toEqual({
                ...defaultState, events: [event1, updatedEvent], selectedEvent: updatedEvent
            });
        });
    });

    describe('when updating an events fails', () => {
        const updatedEvent = { ...event2, title: 'changed', from: 123, to: 456 };
        const action = Actions.updateEventFailed(event2);

        it('should revert changes made in the optimistic response', () => {
            expect(reducer({
                ...defaultState, events: [event1, updatedEvent], selectedEvent: updatedEvent
            }, action)).toEqual({
                ...defaultState, events: [event1, event2], selectedEvent: event2
            });
        });
    });

    describe('when deleting an event', () => {
        const action = Actions.deleteEventSuccess(event1.id);

        it('should remove the correct event', () => {
            expect(reducer({
                ...defaultState, events: [event1, event2]
            }, action)).toEqual({
                ...defaultState, events: [event2]
            })
        });
    });

    describe('when the server cannot or will not delete an event', () => {
        const action = Actions.deleteEventFailed(event1);

        it('should roll back the removal', () => {
            expect(reducer({
                ...defaultState, events: [event2]
            }, action)).toEqual({
                ...defaultState, events: [event2, event1]
            })
        });
    });

    describe('when using the getSelectedEvent selector', () => {
        it('should return the selected event', () => {
            // @ts-ignore
            expect(getSelectedEvent({
                events: { ...defaultState, selectedEvent: event2 }
            })).toEqual(event2);
        });
    });

    describe('when toggling event participation', () => {
        const participant = people['p01'];
        const newPerson = people['p02'];
        const action = Actions.toggleEventParticipation(event1.id, newPerson);

        it('should add the current user to the event if they are not participating', () => {
            expect(reducer({
                ...defaultState, events: [{ ...event1, participants: [participant] }]
            }, action)).toEqual({
                ...defaultState, events: [{ ...event1, participants: [participant, newPerson] }]
            });
        });

        it('should remove the current user from the event if they are participating', () => {
            expect(reducer({
                ...defaultState, events: [{ ...event1, participants: [participant, newPerson] }]
            }, action)).toEqual({
                ...defaultState, events: [{ ...event1, participants: [participant] }]
            })
        });
    });
});