import * as React from 'react';
import { NavProp } from "../../shared/models";
import Layout from "../../hoc/Layout/Layout";
import {FlatList} from "react-native";
import {people} from "../People/People";
import Conversation from "./Conversation/Conversation";

const Conversations = ({ navigation }: NavProp) => (
    <Layout navigation={navigation} title="Conversations">
        <FlatList
            data={people}
            renderItem={({ item }) => <Conversation navigation={navigation} person={item} />}
            keyExtractor={person => person.id}
        />
    </Layout>
);
export default Conversations;