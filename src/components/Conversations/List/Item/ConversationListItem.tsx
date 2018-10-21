import * as React from 'react';
import {NavProp, IConversation} from "../../../../shared/models";
import {Body, Left, ListItem, Right, Text} from "native-base";
import {Routes} from "../../../../shared/constants";
import moment from "moment";
import CachedThumbnail from "../../../UI/CachedThumbnail/CachedThumbnail";

type Props = NavProp & {
    conversation: IConversation;
    onSelect: () => void;
}
const ConversationListItem = ({ conversation: { target, lastMessage }, navigation, onSelect }: Props) => (
    <ListItem avatar
              onPress={() => {
                  onSelect();  // TODO: RACE CONDITION!
                  navigation.navigate(Routes.CHAT_WINDOW);
              }}>
        <Left>
            <CachedThumbnail source={target.profilePicture} />
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