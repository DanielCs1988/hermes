import * as React from 'react';
import {IConversation, NavProp} from "../../../shared/models";
import Layout from "../../../hoc/Layout/Layout";
import {FlatList} from "react-native";
import ConversationListItem from "./Item/ConversationListItem";
import {FetchedData} from "../../../store/types";
import {runIf} from "../../../shared/utils";
import Loader from "../../../hoc/Loader/Loader";
import { ConversationListDispatchers } from "./ConversationListContainer";

type Props = NavProp & FetchedData & ConversationListDispatchers & {
    conversations: IConversation[];
}
class ConversationList extends React.Component<Props> {
    componentDidMount() {
        runIf(!this.props.fetched, this.props.fetchConversations);
    }

    render() {
        const { navigation, conversations, loading } = this.props;
        return (
            <Layout navigation={navigation} title="Conversations">
                <Loader loading={loading}>
                    <FlatList
                        data={conversations}
                        keyExtractor={conversation => conversation.target.id}
                        renderItem={({ item }) => (
                            <ConversationListItem navigation={navigation} conversation={item} />
                        )}
                    />
                </Loader>
            </Layout>
        );
    }
}

export default ConversationList;