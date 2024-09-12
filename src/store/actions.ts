import type { User } from './usersReducer';
import {UnknownAction} from "redux";

export const SET_USERS = 'SET_USERS';
export const SET_NAME_FILTER = 'SET_NAME_FILTER';
export const SET_USERNAME_FILTER = 'SET_USERNAME_FILTER';
export const SET_EMAIL_FILTER = 'SET_EMAIL_FILTER';
export const SET_PHONE_FILTER = 'SET_PHONE_FILTER';
export const SET_FILTERED_USERS = 'SET_FILTERED_USERS';

interface SetUsersAction {
    type: typeof SET_USERS;
    payload: User[];
}

interface SetNameFilterAction {
    type: typeof SET_NAME_FILTER;
    payload: string;
}

interface SetUsernameFilterAction {
    type: typeof SET_USERNAME_FILTER;
    payload: string;
}

interface SetEmailFilterAction {
    type: typeof SET_EMAIL_FILTER;
    payload: string;
}

interface SetPhoneFilterAction {
    type: typeof SET_PHONE_FILTER;
    payload: string;
}

interface SetFilteredUsersAction {
    type: typeof SET_FILTERED_USERS;
    payload: User[];
}

export type UserActionTypes =
    | SetUsersAction
    | SetNameFilterAction
    | SetUsernameFilterAction
    | SetEmailFilterAction
    | SetPhoneFilterAction
    | SetFilteredUsersAction
    | UnknownAction;

export const setUsers = (users: User[]): UserActionTypes => ({
    type: SET_USERS,
    payload: users,
});


export const setNameFilter = (filter: string): UserActionTypes => ({
    type: SET_NAME_FILTER,
    payload: filter,
});

export const setUsernameFilter = (filter: string): UserActionTypes => ({
    type: SET_USERNAME_FILTER,
    payload: filter,
});

export const setEmailFilter = (filter: string): UserActionTypes => ({
    type: SET_EMAIL_FILTER,
    payload: filter,
});

export const setPhoneFilter = (filter: string): UserActionTypes => ({
    type: SET_PHONE_FILTER,
    payload: filter,
});

export const setFilteredUsers = (users: User[]): SetFilteredUsersAction => ({
    type: SET_FILTERED_USERS,
    payload: users,
});


