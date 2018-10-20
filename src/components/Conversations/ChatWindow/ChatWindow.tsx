import * as React from 'react';
import {IPerson, NavProp} from "../../../shared/models";
import {FlatList} from "react-native";
import ChatMessage from "./Message/ChatMessage";
import ChatForm from "./Form/ChatForm";
import Layout from "../../../hoc/Layout/Layout";
import {ChatWindowDispatchers} from "./ChatWindowContainer";
import Loader from "../../../hoc/Loader/Loader";
import {ChatHistory} from "../../../store/types";

type Props = NavProp & ChatWindowDispatchers & {
    messages: ChatHistory;
    currentUser: string | null;
    currentTarget: IPerson;
}
class ChatWindow extends React.Component<Props> {
    componentDidMount() {
        const { fetchMessages, messages, currentTarget } = this.props;
        if (currentTarget && messages && !messages.hasOwnProperty(currentTarget.id)) {
            fetchMessages(currentTarget.id);
        }
    }

    render() {
        const { navigation, messages, currentUser, currentTarget, sendMessage } = this.props;
        const target = currentTarget || {} as IPerson;
        const history = messages[currentTarget.id];
        return (
            <Layout back
                    navigation={navigation}
                    title={target.givenName || 'Chat'}
                    footer={<ChatForm sendMessage={content => sendMessage({ content, to: target.id })} />}>
                <Loader loading={!history}>
                    <FlatList
                        data={history}
                        keyExtractor={message => message.id}
                        renderItem={({ item }) => (
                            <ChatMessage
                                message={item}
                                currentUser={currentUser}
                                targetAvatar={target.profilePicture}/>
                        )}
                    />
                </Loader>
            </Layout>
        );
    }
}

export default ChatWindow;