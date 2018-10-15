import * as React from 'react';
import {View} from "react-native";
import {Button, Icon, Text} from "native-base";
import {PlatformIcon} from "../../../shared/utils";
import MapForm from "./MapForm/MapForm";
import {Location} from "../../../shared/models";

const initialState = {
    open: false
};
type State = Readonly<typeof initialState>
type Props = {
    onLocationPicked: (location: Location) => void;
}
class LocationPicker extends React.Component<Props, State> {
    readonly state = initialState;

    render() {
        return (
            <>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Icon name={PlatformIcon('map')} />
                    </View>
                    <View style={{ flex: 6, alignItems: 'flex-start' }}>
                        <Button transparent onPress={() => this.setState({ open: true })}>
                            <Text>Pick a location...</Text>
                        </Button>
                    </View>
                </View>
                { this.state.open && <MapForm onLocationPicked={this.props.onLocationPicked} /> }
            </>
        );
    }
}

export default LocationPicker;