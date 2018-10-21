import * as React from 'react';
import {IMessage} from "../../../../shared/models";
import {Body, Left, ListItem, Right, Text} from "native-base";
import {ImageURISource} from "react-native";
import CachedThumbnail from "../../../UI/CachedThumbnail/CachedThumbnail";

type Props = {
    message: IMessage;
    currentUser: string | null;
    targetAvatar: ImageURISource;
}
const ChatMessage = ({ message, currentUser, targetAvatar }: Props) => (
    <ListItem avatar noBorder>
        <Left>
            { message.to === currentUser && <CachedThumbnail source={targetAvatar} /> }
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