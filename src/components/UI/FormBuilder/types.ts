import {Location} from "../../../shared/models";
import {ImageURISource} from "react-native";

export enum FormFieldType {
    Text = 'Text',
    TextArea = 'TextArea',
    Number = 'Number',
    Email = 'Email',
    Password = 'Password',
    Radio = 'Radio',
    Selector = 'Selector',
    Location = 'Location',
    Date = 'Date',
    DateTime = 'DateTime',
    Image = 'Image'
}

export type FormValue = string | number | Location | ImageURISource | Date;

export enum LabelType {
    Fixed = 'Fixed',
    Inline = 'Inline',
    Floating = 'Floating',
    Stacked = 'Stacked'
}

export interface Label {
    text: string;
    type: LabelType;
}

export interface ValidationTypes {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    email?: boolean;
    pattern?: RegExp;
}

export interface FormFieldConfig {
    type: FormFieldType;
    name: string;
    defaultValue?: FormValue;
    label?: Label
    validation?: ValidationTypes;
    config?: {
        [key: string]: any
    }
}

export interface FormField {
    value: any;
    valid: boolean;
    rules?: ValidationTypes;
}
export type FormState = Readonly<{
    [name: string]: FormField;
}>

export type FormProps = {
    config: FormFieldConfig[];
}

export interface InputProps {
    value: any;
    valid: boolean;
    label?: Label;
    config?: {
        [key: string]: any
    }
}
export interface FormFieldProps extends InputProps {
    type: FormFieldType;
    onChange: (value: FormValue) => void;
}