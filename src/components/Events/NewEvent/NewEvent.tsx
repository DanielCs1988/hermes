import * as React from 'react';
import { H1 } from "native-base";
import {NavProp} from "../../../shared/models";
import Layout from "../../../hoc/Layout/Layout";

const NewEvent = ({ navigation }: NavProp) => (
    <Layout navigation={navigation} title="New Event" back>
        <H1>NewEvent Panel</H1>
    </Layout>
);
export default NewEvent;