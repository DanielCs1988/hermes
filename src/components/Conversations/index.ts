import {createStackNavigator} from "react-navigation";
import {Routes} from "../../shared/constants";
import ConversationListContainer from "./List/ConversationListContainer";
import ChatWindowContainer from "./ChatWindow/ChatWindowContainer";

const ChatNavigator = createStackNavigator(
    {
        [Routes.CONVERSATIONS]: ConversationListContainer,
        [Routes.CHAT_WINDOW]: ChatWindowContainer
    },
    {
        navigationOptions: {
            header: null
        }
    }
);

export default ChatNavigator;