import {Conversation, Event, Message, Person} from "../shared/models";
import {PeopleActions} from "./actions/people";
import {ConversationActions} from "./actions/conversations";
import {EventActions} from "./actions/events";
import {AuthActions} from "./actions/auth";

interface Loadable {
    loading: boolean;
    error: string | null;
}
interface FetchedData extends Loadable {
    fetched: boolean;
}

export interface PeopleState extends FetchedData {
    people: {
        [id: string]: Person
    };
}

export interface ChatHistory {
    [target: string]: Message[];
}
export interface ConversationState extends FetchedData {
    conversations: Conversation[];
    messages: ChatHistory;
}

export interface EventState extends FetchedData {
    events: Event[];
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