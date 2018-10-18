import {IConversation, IEvent, IMessage, IPerson} from "../shared/models";
import {PeopleActions} from "./actions/people";
import {ConversationActions} from "./actions/conversations";
import {EventActions} from "./actions/events";
import {AuthActions} from "./actions/auth";

export interface Loadable {
    loading: boolean;
    error: string | null;
}
export interface FetchedData extends Loadable {
    fetched: boolean;
}

export interface RollbackError<P> {
    error: string;
    item: P;
}

export interface IPeople {
    [id: string]: IPerson
}
export interface PeopleState extends FetchedData {
    people: IPeople;
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
}

export interface AuthState extends Loadable {
    token: string | null;
    expiresIn: number | null;
}

export interface AppState {
    people: PeopleState;
    conversations: ConversationState;
    events: EventState;
    auth: AuthState;
}

export type AppActions = PeopleActions | ConversationActions | EventActions | AuthActions;