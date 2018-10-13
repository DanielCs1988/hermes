import * as React from 'react';
import { NavProp } from "../../shared/models";
import {Button, H1, Text} from "native-base";
import Layout from "../../hoc/Layout/Layout";
import {Routes} from "../../shared/constants";

const People = ({ navigation }: NavProp) => (
    <Layout navigation={navigation} title="People">
        <H1>People Panel</H1>
        <Button onPress={() => navigation.navigate(Routes.PROFILE)}>
            <Text>Profile</Text>
        </Button>
    </Layout>
);
export default People;