import { Platform } from "react-native";
import { Toast } from "native-base";

export const PlatformIcon = (name: string) => {
    return Platform.OS === 'android' ? `md-${name}` : `ios-${name}`;
};

export const showErrorMessage = (text: string) => {
    Toast.show({
        text,
        buttonText: 'Okay',
        duration: 3000,
        type: 'danger',
        position: 'top'
    });
};

export const chooseBetween = (condition: boolean, func1: Function, func2: Function, ...args: any[]) => {
    if (condition) {
        func1(...args);
    } else {
        func2(...args);
    }
};