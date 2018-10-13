import * as React from 'react';
import { NavProp } from "../../shared/models";
import NavBar from "../../components/UI/NavBar/NavBar";
import {Container, Content} from "native-base";

type Props = NavProp & {
    title: string;
    back?: boolean;
    children: React.ReactNode;
}
const Layout = ({ navigation, title, back = false, children }: Props) => (
    <Container>
        <NavBar navigation={navigation} title={title} back={back} />
        <Content>{children}</Content>
    </Container>
);

export default Layout;