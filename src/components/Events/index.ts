import {createStackNavigator} from "react-navigation";
import {Routes} from "../../shared/constants";
import Events from "./Events";
import EventDetails from "./EventDetails/EventDetails";
import EventForm from "./EventForm/EventForm";

const EventNavigator = createStackNavigator(
    {
        [Routes.EVENTS]: Events,
        [Routes.EVENT_DETAILS]: EventDetails,
        [Routes.EDIT_EVENT]: EventForm,
        [Routes.NEW_EVENT]: EventForm
    },
    {
        navigationOptions: {
            header: null
        }
    }
);

export default EventNavigator;