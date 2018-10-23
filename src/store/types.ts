import {IConversation, IEvent, IMessage, IPerson} from "../shared/models";
import {PeopleActions} from "./actions/people";
import {ConversationActions} from "./actions/conversations";
import {EventActions} from "./actions/events";
import {AuthActions} from "./actions/auth";
import {GlobalActions} from "./actions/global";

export interface Loadable {
    loading: boolean;
}
export interface FetchedData extends Loadable {
    fetched: boolean;
}

export interface GlobalState {
    error: string;
}

export interface IPeople {
    [id: string]: IPerson
}
export interface PeopleState {
    people: IPeople;
    selectedProfile: IPerson;
    currentUser: string;
}

export interface ChatHistory {
    [target: string]: IMessage[];
}
export interface ConversationState extends FetchedData {
    conversations: IConversation[];
    messages: ChatHistory;
    currentTarget: IPerson;
}

export interface IEventList {
    [id: string]: IEvent;
}
export interface EventState extends FetchedData {
    events: IEventList;
    selectedEvent: string | null;
}

export interface AuthState {
    token: string;
    expiresAt: number;
    authenticated: boolean;
}

export interface AppState {
    global: GlobalState;
    people: PeopleState;
    conversations: ConversationState;
    events: EventState;
    auth: AuthState;
}

export type AppActions = GlobalActions | PeopleActions | ConversationActions | EventActions | AuthActions;