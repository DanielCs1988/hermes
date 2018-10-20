import { connect } from "react-redux";
import {AppState} from "../../../store/types";
import ConversationList from "./ConversationList";
import {Actions} from "../../../store/actions/conversations";
import {Dispatch} from "redux";
import {AppActions} from "../../../store/types";
import {IPerson} from "../../../shared/models";

const mapStateToProps = ({ conversations: { conversations, fetched, loading } }: AppState) => ({
    conversations, fetched, loading
});

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => ({
    fetchConversations: () => dispatch(Actions.initFetchConversations()),
    selectConversation: (target: IPerson) => dispatch(Actions.selectTarget(target))
});
export type ConversationListDispatchers = ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConversationList);