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
    })
};

export const chooseBetween = (condition: any, func1: Function, func2: Function, ...args: any[]) => {
    if (condition) {
        return func1(...args);
    } else {
        return func2(...args);
    }
};

export const runIf = (condition: any, func: Function, ...args: any[]) => {
    if (condition) {
        return func(...args);
    }
};