import {IConversation, IMessage} from "../../shared/models";
import {ChatHistory, IEventList, IPeople} from "../types";

export const people: IPeople = {
    'p01': {
        id: 'p01',
        givenName: 'John',
        familyName: 'Smith',
        registeredAt: 28000000,
        profilePicture: { uri: 'https://pbs.twimg.com/profile_images/834093730244079616/0um-zqxI_400x400.jpg' },
        email: 'anon@tor.com',
        phone: 'no way',
        address: 'Somewhere hidden',
        birthday: 3123213123
    },
    'p02': {
        id: 'p02',
        givenName: 'Jane',
        familyName: 'Smith',
        registeredAt: 58000000,
        profilePicture: { uri: 'https://usercontent2.hubstatic.com/14052231_f520.jpg' }
    }
};

export const event1 = {
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
    organizer: people['p01'],
    participants: [people['p01'], people['p02']]
};

export const event2 = {
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
    organizer: people['p02'],
    participants: [people['p02'], people['p01']]
};
export const events: IEventList = {
    [event1.id]: event1,
    [event2.id]: event2
};

export const conversations: IConversation[] = [
    {
        target: people['p01'],
        lastMessage: {
            createdAt: 1539956059954,
            id: 'msg01',
            to: 'someone',
            from: 'else',
            content: 'Oh hai there'
        }
    },
    {
        target: people['p02'],
        lastMessage: {
            createdAt: 1539955059954,
            id: 'msg02',
            to: 'else',
            from: 'someone',
            content: 'This is ye other message!'
        }
    },
];

export const history1: ChatHistory = {
    'p02': [
        {
            id: 'smh',
            content: 'Hey there',
            from: 'Anon',
            to: 'Other Anon',
            createdAt: 1539462943914
        }
    ]
};

export const history2: ChatHistory = {
    'p01': [
        {
            id: 'smh',
            content: 'Hey there',
            from: 'Anon',
            to: 'Other Anon',
            createdAt: 1539462943914
        },
        {
            id: 'smhelse',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            from: 'Other Anon',
            to: 'Anon',
            createdAt: 1539462944914
        },
        {
            id: 'smhelsest',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            from: 'Anon',
            to: 'Other Anon',
            createdAt: 1539462945914
        },
        {
            id: 'smhelsestest',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            from: 'Other Anon',
            to: 'Anon',
            createdAt: 1539462946914
        }
    ]
};

export const newMessage: IMessage = {
    id: 'new',
    content: 'This is the new message!',
    from: 'p02',
    to: 'p01',
    createdAt: 1539462943914
};