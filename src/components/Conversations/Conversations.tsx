import * as React from 'react';
import { NavProp } from "../../shared/models";
import {Button, H1, Text} from "native-base";
import Layout from "../../hoc/Layout/Layout";
import {Routes} from "../../shared/constants";

const Conversations = ({ navigation }: NavProp) => (
    <Layout navigation={navigation} title="Conversations">
        <H1>Conversations Panel</H1>
        <Button onPress={() => navigation.navigate(Routes.CHAT_WINDOW)}>
            <Text>Chat Window</Text>
        </Button>
    </Layout>
);
export default Conversations;