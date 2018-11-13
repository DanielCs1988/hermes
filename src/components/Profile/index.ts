import {createStackNavigator} from "react-navigation";
import {Routes} from "../../shared/constants";
import ProfileDetails from "./Details/ProfileDetails";
import PeopleContainer from "./List/ProfileListContainer";
import ProfileUpdateContainer from "./Form/ProfileFormContainer";

const PeopleNavigator = createStackNavigator(
    {
        [Routes.PEOPLE]: PeopleContainer,
        [Routes.PROFILE]: ProfileDetails,
        [Routes.EDIT_PROFILE]: ProfileUpdateContainer
    },
    {
        navigationOptions: {
            header: null
        }
    }
);

export default PeopleNavigator;