import { connect } from 'react-redux';
import EventList from "./EventList";
import {AppState} from "../../../store/types";
import {Actions, EventActions} from "../../../store/actions/events";
import {Dispatch} from "redux";
import {IEvent} from "../../../shared/models";

const mapStateToProps = ({ events: { events, fetched, loading } }: AppState) => ({
    events, fetched, loading
});

const mapDispatchToProps = (dispatch: Dispatch<EventActions>) => ({
    fetchEvents: () => dispatch(Actions.initFetchEvents()),
    selectEvent: (event: IEvent) => dispatch(Actions.initSelectEvent(event)),
    initForm: () => dispatch(Actions.initCreateEventForm())
});
export type EventListDispatchers = ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventList);