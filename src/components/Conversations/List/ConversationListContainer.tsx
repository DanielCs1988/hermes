import { connect } from "react-redux";
import {AppState} from "../../../store/types";
import ConversationList from "./ConversationList";
import {Actions} from "../../../store/actions/conversations";
import {IConversation} from "../../../shared/models";
import {initialState as people} from "../../../store/reducers/people";
import {Dispatch} from "redux";
import {AppActions} from "../../../store/types";

const conversations: IConversation[] = [
    {
        target: people.people['asd'],
        lastMessage: {
            createdAt: 1539956059954,
            id: 'msg01',
            to: 'someone',
            from: 'else',
            content: 'Oh hai there'
        }
    },
    {
        target: people.people['qrt'],
        lastMessage: {
            createdAt: 1539955059954,
            id: 'msg02',
            to: 'else',
            from: 'someone',
            content: 'This is ye other message!'
        }
    },
];

const mapStateToProps = ({ conversations: { conversations, fetched, loading } }: AppState) => ({
    conversations, fetched, loading
});

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => ({
    fetchConversations: () => dispatch(Actions.fetchConversationsSuccess(conversations))
});
export type ConversationListDispatchers = ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConversationList);