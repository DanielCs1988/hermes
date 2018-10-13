import * as React from 'react';
import { H1 } from "native-base";
import Layout from "../../../hoc/Layout/Layout";
import {NavProp} from "../../../shared/models";

const Profile = ({ navigation }: NavProp) => (
    <Layout navigation={navigation} title="Profile" back>
        <H1>Profile Panel</H1>
    </Layout>
);
export default Profile;