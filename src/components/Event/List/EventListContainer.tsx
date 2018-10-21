import { connect } from 'react-redux';
import EventList from "./EventList";
import {AppState} from "../../../store/types";
import {Actions, EventActions} from "../../../store/actions/events";
import {Dispatch} from "redux";

const mapStateToProps = ({ events: { events, fetched, loading }, people: { currentUser } }: AppState) => ({
    events: Object.values(events).sort((ev1, ev2) => ev1.from - ev2.from),
    fetched, loading, currentUser
});

const mapDispatchToProps = (dispatch: Dispatch<EventActions>) => ({
    fetchEvents: () => dispatch(Actions.initFetchEvents()),
    selectEvent: (eventId: string) => dispatch(Actions.selectEvent(eventId)),
    initForm: () => dispatch(Actions.clearSelection()),
    toggleParticipation: (eventId: string) => dispatch(Actions.initToggleEventParticipation(eventId))
});
export type EventListDispatchers = ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventList);