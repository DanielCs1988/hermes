import {createStackNavigator} from "react-navigation";
import {Routes} from "../../shared/constants";
import Profile from "./Profile/Profile";
import EditProfile from "./EditProfile/EditProfile";
import PeopleContainer from "./PeopleContainer";

const PeopleNavigator = createStackNavigator(
    {
        [Routes.PEOPLE]: PeopleContainer,
        [Routes.PROFILE]: Profile,
        [Routes.EDIT_PROFILE]: EditProfile
    },
    {
        navigationOptions: {
            header: null
        }
    }
);

export default PeopleNavigator;