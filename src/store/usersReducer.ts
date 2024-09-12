import {
    SET_USERS,
    SET_NAME_FILTER,
    SET_USERNAME_FILTER,
    SET_EMAIL_FILTER,
    SET_PHONE_FILTER,
    SET_FILTERED_USERS,
    UserActionTypes
} from "./actions";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

interface UsersState {
    users: User[] | [];
    nameFilter: string;
    usernameFilter: string;
    emailFilter: string;
    phoneFilter: string;
    filteredUsers: User[];
}

const initialState: UsersState = {
    users: [],
    nameFilter: '',
    usernameFilter: '',
    emailFilter: '',
    phoneFilter: '',
    filteredUsers: [],
};


const usersReducer = (state = initialState, action: UserActionTypes): UsersState => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case SET_NAME_FILTER:
            return {
                ...state,
                nameFilter: action.payload,
            };
        case SET_USERNAME_FILTER:
            return {
                ...state,
                usernameFilter: action.payload,
            };
        case SET_EMAIL_FILTER:
            return {
                ...state,
                emailFilter: action.payload,
            };
        case SET_PHONE_FILTER:
            return {
                ...state,
                phoneFilter: action.payload,
            };
        case SET_FILTERED_USERS:
            return {
                ...state,
                filteredUsers: action.payload,
            };
        default:
            return state;
    }
};

export default usersReducer;
