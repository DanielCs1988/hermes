import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import {Actions, EventActions} from "../../../store/actions/events";
import {IEvent} from "../../../shared/models";
import {Dispatch} from "redux";
import {AppState} from "../../../store/types";

const mapStateToProps = ({ events: { events, selectedEvent }, people: { currentUser } }: AppState) => ({
    event: events[selectedEvent],
    currentUser
});

const mapDispatchToProps = (dispatch: Dispatch<EventActions>) => ({
    deleteEvent: (event: IEvent) => dispatch(Actions.initDeleteEvent(event)),
    toggleParticipation: (eventId: string) => dispatch(Actions.initToggleEventParticipation(eventId))
});
export type EventDetailsDispatcher = ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventDetails);