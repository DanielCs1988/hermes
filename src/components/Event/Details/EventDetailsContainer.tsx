import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import {Actions} from "../../../store/actions/events";

const mapDispatchToProps = (dispatch: Function) => ({
    deleteEvent: (id: string) => dispatch(Actions.deleteEventSuccess(id))
});
export type EventDetailsDispatcher = ReturnType<typeof mapDispatchToProps>;

export default connect(
    null,
    mapDispatchToProps
)(EventDetails);