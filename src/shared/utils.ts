import { Platform } from "react-native";
import { Toast } from "native-base";
import {Entity} from "./models";

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

export const normalize = <T extends Entity>(collection: T[]): {[id: string]: T} => {
    return collection
        .map(entity => ({ [entity.id]: entity }))
        .reduce((acc, next) => ({ ...acc, ...next }), {});
};

export const removeProperty = (prevObject, keyToRemove) => {
    return Object.keys(prevObject)
        .reduce((obj, key) => {
            if (key !== keyToRemove) {
                obj[key] = prevObject[key];
            }
            return obj;
        }, {});
};

export const IdGenerator = {
    _current: 0,
    generate() {
        return '' + this._current++;
    }
};