import * as React from 'react';
import {AppState} from "../../store/types";
import {showErrorMessage} from "../../shared/utils";
import {Dispatch} from "redux";
import {Actions, GlobalActions} from "../../store/actions/global";
import {connect} from "react-redux";

type Props = GlobalDispatchers & {
    error: string | null;
    children: React.ReactNode;
};
class WithErrorHandling extends React.Component<Props> {
    componentDidUpdate() {
        const { error, hideError } = this.props;
        if (error && hideError) {
            showErrorMessage(error);
            hideError();
        }
    }

    render() {
        return this.props.children;
    }
}

const mapStateToProps = ({ global: { error } }: AppState) => ({ error });
const mapDispatchToProps = (dispatch: Dispatch<GlobalActions>) => ({
    hideError: () => dispatch(Actions.clearError())
});
type GlobalDispatchers = ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WithErrorHandling);