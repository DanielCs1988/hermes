import * as React from 'react';
import { NavProp } from "../../../shared/models";
import { H1 } from "native-base";
import Layout from "../../../hoc/Layout/Layout";

const ChatWindow = ({ navigation }: NavProp) => (
    <Layout navigation={navigation} title="Chat Window" back>
        <H1>ChatWindow Panel</H1>
    </Layout>
);
export default ChatWindow;