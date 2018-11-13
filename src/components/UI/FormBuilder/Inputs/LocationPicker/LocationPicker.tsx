import * as React from 'react';
import {View} from "react-native";
import {Button, Icon, Text} from "native-base";
import {PlatformIcon} from "../../../../../shared/utils";
import MapForm from "./MapForm/MapForm";
import {Location} from "../../../../../shared/models";

type State = Readonly<{ open: boolean }>
type Props = {
    onLocationPicked: (location: Location) => void;
    value?: Location;
}
class LocationPicker extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            open: props.value
        };
    }

    render() {
        return (
            <>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginHorizontal: '5%' }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Icon name={PlatformIcon('map')} />
                    </View>
                    <View style={{ flex: 6, alignItems: 'flex-start' }}>
                        <Button transparent onPress={() => this.setState({ open: true })}>
                            <Text>Pick a location...</Text>
                        </Button>
                    </View>
                </View>
                { this.state.open && <MapForm
                    onLocationPicked={this.props.onLocationPicked}
                    value={this.props.value}
                /> }
            </>
        );
    }
}

export default LocationPicker;