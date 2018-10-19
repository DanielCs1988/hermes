import * as React from 'react';
import {NavProp, IConversation} from "../../../../shared/models";
import {Body, Left, ListItem, Right, Text, Thumbnail} from "native-base";
import {Routes} from "../../../../shared/constants";
import moment from "moment";

type Props = NavProp & {
    conversation: IConversation;
}
const ConversationListItem = ({ conversation: { target, lastMessage }, navigation }: Props) => (
    <ListItem avatar
              onPress={() => navigation.navigate(Routes.CHAT_WINDOW, { person: target })}>
        <Left>
            <Thumbnail source={target.profilePicture} />
        </Left>
        <Body>
            <Text>{`${target.givenName} ${target.familyName}`}</Text>
            <Text note>{lastMessage.content}</Text>
        </Body>
        <Right>
            <Text note>{moment(lastMessage.createdAt).fromNow()}</Text>
        </Right>
    </ListItem>
);

export default ConversationListItem;