export enum Endpoints {
    PROFILES = 'https://hermes-social-server.herokuapp.com/users',
    EVENTS = 'https://hermes-social-server.herokuapp.com/events',
    CHAT = 'https://hermes-social-server.herokuapp.com/chat'
}

export enum Routes {
    AUTH_SCREEN = 'AuthScreen',
    DRAWER = 'Drawer',
    MAIN_APPLICATION = 'MainApplication',
    EVENT_STACK = 'EventStack',
    EVENTS = 'Events',
    EVENT_DETAILS = 'EventDetails',
    EDIT_EVENT = 'EditEvent',
    NEW_EVENT = 'NewEvent',
    PEOPLE_STACK = 'PeopleStack',
    PEOPLE = 'People',
    PROFILE = 'Profile',
    EDIT_PROFILE = 'EditProfile',
    CHAT_STACK = 'ChatStack',
    CONVERSATIONS = 'Conversations',
    CHAT_WINDOW = 'ChatWindow',
    BACK = 'Back'
}

export enum StorageKeys {
    TOKEN = 'nm:auth:token',
    EXPIRES_AT = 'nm:auth:expiresAt'
}