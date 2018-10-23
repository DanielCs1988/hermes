import * as React from 'react';
import { NavProp } from "../../shared/models";
import NavBar from "../../components/UI/NavBar/NavBar";
import {Container, Content} from "native-base";
import WithGlobalState from "../WithErrorHandling/WithErrorHandling";

type Props = NavProp & {
    title: string;
    back?: boolean;
    padded?: boolean;
    footer?: React.ReactNode;
    children: React.ReactNode;
}
class Layout extends React.Component<Props> {
    render() {
        const { navigation, title, back = false, padded = false, footer, children } = this.props;
        return (
            <WithGlobalState>
                <Container>
                    <NavBar navigation={navigation} title={title} back={back} />
                    <Content padder={padded}>{children}</Content>
                    { footer }
                </Container>
            </WithGlobalState>
        );
    }
}

export default Layout;