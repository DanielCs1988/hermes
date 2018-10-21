import { connect } from 'react-redux';
import EventList from "./EventList";
import {AppState} from "../../../store/types";
import {Actions, EventActions} from "../../../store/actions/events";
import {Dispatch} from "redux";
import {IEvent} from "../../../shared/models";

const mapStateToProps = ({ events: { events, fetched, loading }, people: { currentUser } }: AppState) => ({
    events, fetched, loading, currentUser
});

const mapDispatchToProps = (dispatch: Dispatch<EventActions>) => ({
    fetchEvents: () => dispatch(Actions.initFetchEvents()),
    selectEvent: (event: IEvent) => dispatch(Actions.initSelectEvent(event)),
    initForm: () => dispatch(Actions.initCreateEventForm()),
    toggleParticipation: (eventId: string) => dispatch(Actions.initToggleEventParticipation(eventId))
});
export type EventListDispatchers = ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventList);