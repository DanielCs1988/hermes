import * as React from 'react';
import {Message} from "../../../../shared/models";
import {Body, Left, ListItem, Right, Text, Thumbnail} from "native-base";
import {ImageURISource} from "react-native";

type Props = {
    message: Message;
    currentUser: string;
    otherUser: ImageURISource;
}
const ChatMessage = ({ message, currentUser, otherUser }: Props) => (
    <ListItem avatar noBorder>
        <Left>
            { message.to === currentUser && <Thumbnail source={otherUser} /> }
        </Left>
        <Body>
            { message.to === currentUser && <Text>{message.content}</Text> }
        </Body>
        <Right>
            { message.from === currentUser && <Text>{message.content}</Text> }
        </Right>
    </ListItem>
);

export default ChatMessage;