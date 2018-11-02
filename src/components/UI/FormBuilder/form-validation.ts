import { ValidationTypes } from "./types";

export const validate = (value: any, rules?: ValidationTypes) => {
    if (!rules) {
        return true;
    }
    if (!value) {
        return false;
    }
    if (rules.minLength && value.length < rules.minLength) {
        return false;
    }
    if (rules.maxLength && value.length > rules.maxLength) {
        return false;
    }
    if (rules.email && !validateEmail(value)) {
        return false;
    }
    if (rules.pattern && !value.match(rules.pattern)) {
        return false;
    }
    return true;
};

const validateEmail = (email: string) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
};