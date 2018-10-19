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
        const { navigation, messages } = this.props;
        const { id, givenName } = navigation.getParam('person', {});
        const chatHistory = messages[id];
        return (
            <Layout back
                    navigation={navigation}
                    title={givenName || 'Chat'}
                    footer={<ChatForm currentUserId="Other Anon" targetUserId="Anon" />}>
                <Loader loading={!chatHistory}>
                    <FlatList
                        data={chatHistory}
                        keyExtractor={message => message.id}
                        renderItem={({ item }) => (
                            <ChatMessage
                                message={item}
                                currentUser="Other Anon"
                                otherUser={{ uri: 'https://pbs.twimg.com/profile_images/834093730244079616/0um-zqxI_400x400.jpg' }}/>
                        )}
                    />
                </Loader>
            </Layout>
        );
    }
}

export default ChatWindow;