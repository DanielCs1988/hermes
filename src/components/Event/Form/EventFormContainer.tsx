import { connect } from "react-redux";
import {IEvent} from "../../../shared/models";
import {Actions} from "../../../store/actions/events";
import EventForm from "./EventForm";
import {AppState} from "../../../store/types";

const mapStateToProps = ({ events: { events, selectedEvent } }: AppState) => ({ event: events[selectedEvent] });

const mapDispatchToProps = (dispatch: Function) => ({
    createEvent: (event: IEvent) => dispatch(Actions.initCreateEvent(event)),
    updateEvent: (event: IEvent) => dispatch(Actions.initUpdateEvent(event))
});
export type EventFormDispatchers = ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventForm);