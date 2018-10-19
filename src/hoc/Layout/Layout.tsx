import * as React from 'react';
import { NavProp } from "../../shared/models";
import NavBar from "../../components/UI/NavBar/NavBar";
import {Container, Content} from "native-base";
import {runIf, showErrorMessage} from "../../shared/utils";
import {AppState} from "../../store/types";
import {connect} from "react-redux";

type Props = NavProp & {
    title: string;
    back?: boolean;
    padded?: boolean;
    footer?: React.ReactNode;
    children: React.ReactNode;
    error: string | null;
}
class Layout extends React.Component<Props> {
    componentDidUpdate() {
        const { error } = this.props;
        runIf(error, showErrorMessage, error);
    }

    render() {
        const { navigation, title, back = false, padded = false, footer, children } = this.props;
        return (
            <Container>
                <NavBar navigation={navigation} title={title} back={back} />
                <Content padder={padded}>{children}</Content>
                { footer }
            </Container>
        );
    }
}

const mapStateToProps = ({ global: { error } }: AppState) => ({ error });

export default connect(mapStateToProps)(Layout);