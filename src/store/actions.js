export const SET_USERS = 'SET_USERS';
export const SET_NAME_FILTER = 'SET_NAME_FILTER';
export const SET_USERNAME_FILTER = 'SET_USERNAME_FILTER';
export const SET_EMAIL_FILTER = 'SET_EMAIL_FILTER';
export const SET_PHONE_FILTER = 'SET_PHONE_FILTER';
export const SET_FILTERED_USERS = 'SET_FILTERED_USERS';

export const setUsers = (payload) => {
    return {
        type: 'SET_USERS',
        payload: payload
    }
}

export const setNameFilter = (payload) => {
    return {
        type: 'SET_NAME_FILTER',
        payload: payload
    }
}

export const setUsernameFilter = (payload) => {
    return {
        type: 'SET_USERNAME_FILTER',
        payload: payload
    }
}

export const setEmailFilter = (payload) => {
    return {
        type: 'SET_EMAIL_FILTER',
        payload: payload
    }
}

export const setPhoneFilter = (payload) => {
    return {
        type: 'SET_PHONE_FILTER',
        payload: payload
    }
}

export const setFilteredUsers = (payload) => {
    return {
        type: 'SET_FILTERED_USERS',
        payload: payload
    }
}


