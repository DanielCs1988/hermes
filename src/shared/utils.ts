import { Platform } from "react-native";
import { Toast } from "native-base";
import {AxiosRequestConfig} from "axios";

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

export const normalize = (
    collection: any[],
    keyField = 'id',
    transform?: (originalObject) => any
): {[key: string]: any} => {
    const result = {};
    collection.forEach(el => {
        const key = el[keyField];
        result[key] = transform ?
            transform(el) :
            { ...el };
    });
    return result;
};

export const removeProperty = <T>(prevObject: T, keyToRemove: keyof T) => {
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

export const withAuth = (token: string): AxiosRequestConfig => ({
    headers: {
        Authorization: `Bearer ${token}`
    }
});