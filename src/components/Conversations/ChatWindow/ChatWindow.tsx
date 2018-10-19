import * as React from 'react';
import {NavProp} from "../../../shared/models";
import {FlatList} from "react-native";
import ChatMessage from "./Message/ChatMessage";
import ChatForm from "./Form/ChatForm";
import Layout from "../../../hoc/Layout/Layout";
import {ChatHistory} from "../../../store/types";
import {ChatWindowDispatchers} from "./ChatWindowContainer";
import {runIf} from "../../../shared/utils";
import Loader from "../../../hoc/Loader/Loader";

type Props = NavProp & ChatWindowDispatchers & {
    messages: ChatHistory;
    currentUser: string | null;
}
class ChatWindow extends React.Component<Props> {
    componentDidMount() {
        const { navigation, fetchMessages, messages } = this.props;
        const { id } = navigation.getParam('person', {});
        runIf(
            id && !messages.hasOwnProperty(id),
            fetchMessages, id
        );
    }

    render() {
        const { navigation, messages, currentUser, sendMessage } = this.props;
        const { id, givenName, profilePicture } = navigation.getParam('person', {});
        const chatHistory = messages[id];
        return (
            <Layout back
                    navigation={navigation}
                    title={givenName || 'Chat'}
                    footer={<ChatForm sendMessage={content => sendMessage({ content, to: id })} />}>
                <Loader loading={!chatHistory}>
                    <FlatList
                        data={chatHistory}
                        keyExtractor={message => message.id!}
                        renderItem={({ item }) => (
                            <ChatMessage
                                message={item}
                                currentUser={currentUser}
                                targetAvatar={profilePicture}/>
                        )}
                    />
                </Loader>
            </Layout>
        );
    }
}

export default ChatWindow;