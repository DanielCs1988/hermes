import { connect } from "react-redux";
import {IEvent} from "../../../shared/models";
import {Actions} from "../../../store/actions/events";
import EventForm from "./EventForm";

const mapDispatchToProps = (dispatch: Function) => ({
    createEvent: (event: IEvent) => dispatch(Actions.createEventOptRes(event)),
    updateEvent: (event: IEvent) => dispatch(Actions.updateEventSuccess(event))
});
export type EventFormDispatchers = ReturnType<typeof mapDispatchToProps>;

export default connect(
    null,
    mapDispatchToProps
)(EventForm);