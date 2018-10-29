import * as React from 'react';
import {View} from "react-native";

type Props = {
    online: boolean
}
const OnlineMarker = ({ online }: Props) => (
    <>{
        online && <View style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 16,
            height: 16,
            backgroundColor: 'green',
            borderRadius: 8
    }} />
    }</>
);

export default OnlineMarker;