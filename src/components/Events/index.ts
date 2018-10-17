import {createStackNavigator} from "react-navigation";
import {Routes} from "../../shared/constants";
import EventDetails from "./EventDetails/EventDetails";
import EventForm from "./EventForm/EventForm";
import EventContainer from "./EventContainer";

const EventNavigator = createStackNavigator(
    {
        [Routes.EVENTS]: EventContainer,
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