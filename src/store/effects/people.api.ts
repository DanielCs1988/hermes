import axios from 'axios';
import {IPerson} from "../../shared/models";
import {Endpoints} from "../../shared/constants";
import {withAuth} from "../../shared/utils";

export const fetchProfiles = async (token: string): Promise<IPerson[]> => {
    const { data: people } = await axios.get(Endpoints.PROFILES, withAuth(token));
    return people.map(person => ({
        ...person, profilePicture: { uri: person.profilePicture }
    }));
};

export const fetchCurrentUser = async (token: string): Promise<string> => {
    const { data: currentUser } = await axios.get(`${Endpoints.PROFILES}/current`, withAuth(token));
    return currentUser.id;
};

export const updateProfile = async (profile: IPerson, token: string) => {
    const { data: updatedProfile } = await axios.put(Endpoints.PROFILES, {
        ...profile, profilePicture: profile.profilePicture.uri
    }, withAuth(token));
    return { ...updatedProfile, profilePicture: { uri: updatedProfile.profilePicture } };
};