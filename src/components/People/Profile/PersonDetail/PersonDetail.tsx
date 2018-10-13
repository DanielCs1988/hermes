import * as React from 'react';
import { CardItem, Icon, Text } from "native-base";
import {PlatformIcon} from "../../../../shared/utils";

type Props = {
    icon: string;
    text?: string | number;
};
const PersonDetail = ({ icon, text }: Props) => (
    text ?
        <CardItem>
            <Icon name={PlatformIcon(icon)} />
            <Text>{text}</Text>
        </CardItem>
        : null
);

export default PersonDetail;