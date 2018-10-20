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
    error: string | null;
}

export interface IPeople {
    [id: string]: IPerson
}
export interface PeopleState extends FetchedData {
    people: IPeople;
    currentUser: string | null;
}

export interface ChatHistory {
    [target: string]: IMessage[];
}
export interface ConversationState extends FetchedData {
    conversations: IConversation[];
    messages: ChatHistory;
}

export interface EventState extends FetchedData {
    events: IEvent[];
    selectedEvent: IEvent | null;
}

export interface AuthState extends Loadable {
    token: string | null;
    expiresIn: number | null;
}

export interface AppState {
    global: GlobalState;
    people: PeopleState;
    conversations: ConversationState;
    events: EventState;
    auth: AuthState;
}

export type AppActions = GlobalActions | PeopleActions | ConversationActions | EventActions | AuthActions;