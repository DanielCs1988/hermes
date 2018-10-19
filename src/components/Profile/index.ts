import {createStackNavigator} from "react-navigation";
import {Routes} from "../../shared/constants";
import ProfileDetails from "./Details/ProfileDetails";
import ProfileUpdate from "./Update/ProfileUpdate";
import PeopleContainer from "./List/ProfileListContainer";

const PeopleNavigator = createStackNavigator(
    {
        [Routes.PEOPLE]: PeopleContainer,
        [Routes.PROFILE]: ProfileDetails,
        [Routes.EDIT_PROFILE]: ProfileUpdate
    },
    {
        navigationOptions: {
            header: null
        }
    }
);

export default PeopleNavigator;