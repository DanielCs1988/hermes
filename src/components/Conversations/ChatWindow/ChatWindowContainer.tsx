import { connect } from "react-redux";
import {AppActions, AppState, ChatHistory} from "../../../store/types";
import ChatWindow from "./ChatWindow";
import {Dispatch} from "redux";
import {Actions} from "../../../store/actions/conversations";
import {IMessage} from "../../../shared/models";

const messages: ChatHistory = {
    'asd': [
        {
            id: 'smh',
            content: 'Hey there',
            from: 'Anon',
            to: 'Other Anon',
            createdAt: 1539462943914
        },
        {
            id: 'smhelse',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            from: 'Other Anon',
            to: 'Anon',
            createdAt: 1539462944914
        },
        {
            id: 'smhelsest',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            from: 'Anon',
            to: 'Other Anon',
            createdAt: 1539462945914
        },
        {
            id: 'smhelsestest',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            from: 'Other Anon',
            to: 'Anon',
            createdAt: 1539462946914
        }
    ]
};

const mapStateToProps = ({
    conversations: { messages },
    people: { currentUser }
}: AppState) => ({
    messages, currentUser
});

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => ({
    fetchMessages: () => dispatch(Actions.fetchMessagesSuccess(messages)),
    sendMessage: (message: IMessage) => dispatch(Actions.createMessageOptRes(message))
});
export type ChatWindowDispatchers = ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatWindow);