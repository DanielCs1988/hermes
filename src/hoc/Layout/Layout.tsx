import * as React from 'react';
import { NavProp } from "../../shared/models";
import NavBar from "../../components/UI/NavBar/NavBar";
import {Container, Content} from "native-base";
import {showErrorMessage} from "../../shared/utils";
import {AppState} from "../../store/types";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Actions, GlobalActions} from "../../store/actions/global";

type Props = NavProp & {
    title: string;
    back?: boolean;
    padded?: boolean;
    footer?: React.ReactNode;
    children: React.ReactNode;
    error?: string | null;
    hideError?: () => void;
}
class Layout extends React.Component<Props> {
    componentDidUpdate() {
        const { error, hideError } = this.props;
        if (error && hideError) {
            showErrorMessage(error);
            hideError();
        }
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
const mapDispatchToProps = (dispatch: Dispatch<GlobalActions>) => ({
    hideError: () => dispatch(Actions.clearError())
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);