import * as React from 'react';
import { CachedImage } from 'react-native-cached-image';
import {StyleSheet} from "react-native";

const CachedThumbnail = ({ style = {}, square = false, ...rest }) => (
    <CachedImage style={[
        styles.basic,
        square && styles.square,
        style
    ]} {...rest} />
);

const styles = StyleSheet.create({
    basic: {
        width: 56,
        height: 56,
        borderRadius: 28
    },
    square: {
        borderRadius: 0
    }
});

export default CachedThumbnail;