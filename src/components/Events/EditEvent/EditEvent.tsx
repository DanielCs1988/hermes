import * as React from 'react';
import { H1 } from "native-base";
import {NavProp} from "../../../shared/models";
import Layout from "../../../hoc/Layout/Layout";

const EditEvent = ({ navigation }: NavProp) => (
    <Layout navigation={navigation} title="Edit Event" back>
        <H1>EditEvent Panel</H1>
    </Layout>
);
export default EditEvent;