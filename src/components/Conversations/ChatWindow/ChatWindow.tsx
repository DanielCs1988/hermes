import * as React from 'react';
import {IMessage, NavProp} from "../../../shared/models";
import {FlatList} from "react-native";
import ChatMessage from "./ChatMessage/ChatMessage";
import ChatForm from "./ChatForm/ChatForm";
import Layout from "../../../hoc/Layout/Layout";

const messages: IMessage[] = [
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
];
const ChatWindow = ({ navigation }: NavProp) => {
    const person = navigation.getParam('person', {});
    return (
        <Layout back
            navigation={navigation}
            title={person.givenName}
            footer={<ChatForm currentUserId="Other Anon" targetUserId="Anon" />}>
            <FlatList
                data={messages}
                renderItem={({ item }) => (
                    <ChatMessage
                        message={item}
                        currentUser="Other Anon"
                        otherUser={{ uri: 'https://pbs.twimg.com/profile_images/834093730244079616/0um-zqxI_400x400.jpg' }}/>
                )}
                keyExtractor={message => message.id}
            />
        </Layout>
    );
};

export default ChatWindow;