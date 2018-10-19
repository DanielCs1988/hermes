import { connect } from 'react-redux';
import EventList from "./EventList";
import {AppState} from "../../../store/types";
import {Actions} from "../../../store/actions/events";
import {IEvent} from "../../../shared/models";
import {initialState as people} from "../../../store/reducers/people";

export const events: IEvent[] = [
    {
        id: 'id1',
        title: 'Crazy GOA party',
        description: 'Lorem ipsum etc.',
        image: { uri: 'https://i.pinimg.com/originals/b0/b7/b1/b0b7b114b759f274c704f83637254790.jpg' },
        createdAt: 1539542632486,
        from: 1542236400000,
        to: 1542322800000,
        location: {
            name: 'Somewhere',
            latitude: 47.4924430302,
            longitude: 19.0527914555
        },
        organizer: people.people['asd'],
        participants: [people.people['asd'], people.people['qrt']]
    },
    {
        id: 'id2',
        title: 'Grill party',
        description: 'Lorem ipsum etc.',
        image: { uri: 'https://www.hoteltokert.hu/media/k2/items/cache/954fb0ebf1d84fb921bfb0b6e045d57f_XL.jpg' },
        createdAt: 1539542632486,
        from: 1542236400000,
        to: 1542322800000,
        location: {
            name: 'Somewhere else',
            latitude: -40.3434234234,
            longitude: 65.4324234423
        },
        organizer: people.people['qrt'],
        participants: [people.people['asd'], people.people['qrt']]
    }
];

const mapStateToProps = ({ events: { events, error, fetched, loading } }: AppState) => ({
    events, error, fetched, loading
});

const mapDispatchToProps = (dispatch: Function) => ({
    fetchEvents: () => dispatch(Actions.fetchEventsSuccess(events))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventList);