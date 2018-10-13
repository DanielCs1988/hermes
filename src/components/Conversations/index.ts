import {createStackNavigator} from "react-navigation";
import {Routes} from "../../shared/constants";
import Conversations from "./Conversations";
import ChatWindow from "./ChatWindow/ChatWindow";

const ChatNavigator = createStackNavigator(
    {
        [Routes.CONVERSATIONS]: Conversations,
        [Routes.CHAT_WINDOW]: ChatWindow
    },
    {
        navigationOptions: {
            header: null
        }
    }
);

export default ChatNavigator;