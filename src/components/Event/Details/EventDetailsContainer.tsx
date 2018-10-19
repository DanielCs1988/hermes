import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import {Actions} from "../../../store/actions/events";
import {IEvent} from "../../../shared/models";

const mapDispatchToProps = (dispatch: Function) => ({
    deleteEvent: (event: IEvent) => dispatch(Actions.initDeleteEvent(event))
});
export type EventDetailsDispatcher = ReturnType<typeof mapDispatchToProps>;

export default connect(
    null,
    mapDispatchToProps
)(EventDetails);