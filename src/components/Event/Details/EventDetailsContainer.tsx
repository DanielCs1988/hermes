import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import {Actions, EventActions} from "../../../store/actions/events";
import {IEvent} from "../../../shared/models";
import {Dispatch} from "redux";
import {AppState} from "../../../store/types";

const mapStateToProps = ({ events: { selectedEvent } }: AppState) => ({ event: selectedEvent });

const mapDispatchToProps = (dispatch: Dispatch<EventActions>) => ({
    deleteEvent: (event: IEvent) => dispatch(Actions.initDeleteEvent(event))
});
export type EventDetailsDispatcher = ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventDetails);