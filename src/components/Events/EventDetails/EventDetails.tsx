import * as React from 'react';
import { H1 } from "native-base";
import {NavProp} from "../../../shared/models";
import Layout from "../../../hoc/Layout/Layout";

const EventDetails = ({ navigation }: NavProp) => (
    <Layout navigation={navigation} title="Event Details" back>
        <H1>EventDetails Panel</H1>
    </Layout>
);
export default EventDetails;