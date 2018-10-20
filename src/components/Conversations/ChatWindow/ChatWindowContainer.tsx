import { connect } from "react-redux";
import {AppActions, AppState} from "../../../store/types";
import ChatWindow from "./ChatWindow";
import {Dispatch} from "redux";
import {Actions} from "../../../store/actions/conversations";
import {IMessage} from "../../../shared/models";

const mapStateToProps = ({ conversations: { messages, currentTarget }, people: { currentUser } }: AppState) => ({
    messages, currentUser, currentTarget
});

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => ({
    fetchMessages: (target: string) => dispatch(Actions.initFetchMessages(target)),
    sendMessage: (message: IMessage) => dispatch(Actions.initCreateMessage(message))
});
export type ChatWindowDispatchers = ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatWindow);