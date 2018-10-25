import * as React from 'react';
import {ImageURISource, View} from "react-native";
import { CachedImage } from 'react-native-cached-image';
import {Button, Icon, Text} from "native-base";
import ImagePicker from 'react-native-image-picker';
import {PlatformIcon, showErrorMessage} from "../../../shared/utils";

type Props = {
    onImagePicked: (image: ImageURISource) => void;
    value?: ImageURISource;
}
type State = {
    pickedImage: ImageURISource | null;
}
class ImagePickerForm extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            pickedImage: props.value
        };
    }

    pickImageHandler = () => {
        ImagePicker.showImagePicker({
            title: 'Choose a fitting image for your event!',
            maxWidth: 800,
            maxHeight: 600
        }, res => {
            if (res.didCancel) {
                return;
            }
            if (res.error) {
                return showErrorMessage(res.error);
            }
            this.setState({
                pickedImage: { uri: res.uri, body: res.data }
            }, () => this.props.onImagePicked(this.state.pickedImage!));
        });
    };

    render() {
        const { pickedImage } = this.state;
        return (
            <View style={{ height: 250, width: '100%', backgroundColor: '#555', justifyContent: 'center', position: 'relative', marginBottom: 10 }}>
            {
                pickedImage ?
                    <>
                        <CachedImage
                            source={{ uri: pickedImage }}
                            style={{ height: '100%', width: '100%' }}
                        />
                        <Button info
                                style={{ position: 'absolute', bottom: 0, right: 0, borderTopLeftRadius: 10 }}
                                onPress={this.pickImageHandler}>
                            <Icon name={PlatformIcon('create')} />
                        </Button>
                    </>
                    :
                    <Button iconLeft transparent info
                            style={{ alignSelf: 'center' }}
                            onPress={this.pickImageHandler}>
                        <Icon name={PlatformIcon('camera')}/>
                        <Text>Upload an image</Text>
                    </Button>
            }
            </View>
        );
    }
}

export default ImagePickerForm;