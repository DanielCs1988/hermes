import * as React from 'react';
import { CardItem, Icon, Text } from "native-base";
import {PlatformIcon} from "../../../../shared/utils";
import * as moment from "moment";

type Props = {
    icon: string;
    content?: string;
    date?: number;
};
const PersonDetail = ({ icon, content, date }: Props) => (
    content || date ?
        <CardItem>
            <Icon name={PlatformIcon(icon)} />
            <Text>{
                date ?
                    moment.unix(date / 1000).format('YYYY. MMMM D.') :
                    content
            }</Text>
        </CardItem>
        : null
);

export default PersonDetail;