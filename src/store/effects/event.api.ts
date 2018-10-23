import axios from 'axios';
import {Endpoints} from "../../shared/constants";
import {withAuth} from "../../shared/utils";
import {IEvent} from "../../shared/models";

export const fetchEvents = async (token: string) => {
    const { data: events } = await axios.get(Endpoints.EVENTS, withAuth(token));
    return events;
};

export const createEvent = async (event: IEvent, token: string) => {
    const { data: newEvent } = await axios.post(Endpoints.EVENTS, {
        ...event, image: event.image.uri, organizer: null
    }, withAuth(token));
    return newEvent;
};

export const updateEvent = async (event: IEvent, token: string) => {
    const { data: updatedEvent } = await axios.put(`${Endpoints.EVENTS}/${event.id}`, {
        ...event, image: event.image.uri, organizer: null, participants: []
    }, withAuth(token));
    return updatedEvent;
};

export const deleteEvent = (id: string, token: string) => {
    return axios.delete(`${Endpoints.EVENTS}/${id}`, withAuth(token));
};

export const toggleParticipation = async (id: string, token: string) => {
    await axios.post(`${Endpoints.EVENTS}/${id}`, {}, withAuth(token));
};