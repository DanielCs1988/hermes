import * as React from 'react';
import {Dimensions, View} from "react-native";
import {Button, Input, Item, Text} from "native-base";
import MapView, { Marker } from "react-native-maps";
import {Location} from "../../../../../../shared/models";

const initialState = {
    locationPicked: false,
    locationText: '',
    location: {
        latitude: 37.7900352,
        longitude: -122.4013726,
        latitudeDelta: 0.0122,
        longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122
    }
};
type State = Readonly<typeof initialState>
type Props = {
    onLocationPicked: (location: Location) => void;
    value?: Location;
}
class MapForm extends React.Component<Props, State> {
    private map = React.createRef<MapView>();

    constructor(props) {
        super(props);
        const locationProvided = props.value;
        this.state = {
            ...initialState,
            locationText: locationProvided ? props.value.name : initialState.locationText,
            locationPicked: locationProvided,
            location: {
                ...initialState.location,
                longitude: locationProvided ? props.value.longitude : initialState.location.longitude,
                latitude: locationProvided ? props.value.latitude : initialState.location.latitude
            }
        };
    }

    private sendLocation = (location: Location) => {
        if (this.state.locationText.trim().length > 0) {
            this.props.onLocationPicked(location);
        }
    };

    private navigateMapToCoords = (latitude: number, longitude: number) => {
        this.setState(prevState => ({
            locationPicked: true,
            location: {
                ...prevState.location,
                latitude, longitude
            }
        }), () => {
            this.map.current!.animateToRegion(
                this.state.location,
                300
            );
            this.sendLocation({ latitude, longitude, name: this.state.locationText });
        });
    };

    private locationTextSubmitted = () => {
        this.navigateMapToCoords(47.4924430302, 19.0527914555);
    };

    private mapClickedHandler = ({ nativeEvent: { coordinate: { latitude, longitude } } }) => {
        this.navigateMapToCoords(latitude, longitude);
    };

    render() {
        const { location, locationText, locationPicked } = this.state;
        return (
            <View style={{ alignItems: 'center', width: '90%', marginHorizontal: '5%' }}>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Item rounded style={{ flex: 4, paddingHorizontal: 5, marginRight: 10, backgroundColor: '#eee' }}>
                        <Input
                            value={locationText}
                            onChangeText={val => this.setState({ locationText: val })}
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="Pick a location..."
                        />
                    </Item>
                    <Button success bordered rounded style={{ flex: 1 }}
                            onPress={this.locationTextSubmitted}>
                        <Text>Go!</Text>
                    </Button>
                </View>
                <MapView
                    initialRegion={location}
                    style={{ width: '100%', height: 250 }}
                    ref={this.map}
                    onPress={this.mapClickedHandler}>
                    { locationPicked && <Marker coordinate={location} /> }
                </MapView>
            </View>
        );
    }
}

export default MapForm;