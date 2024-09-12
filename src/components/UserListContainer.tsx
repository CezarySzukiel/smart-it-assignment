import {useEffect, useState} from "react";
import UserListView from "./UserListView";
import {useDispatch, useSelector} from 'react-redux';
import {
    setEmailFilter,
    setFilteredUsers,
    setNameFilter,
    setPhoneFilter,
    setUsernameFilter,
    setUsers,
    UserActionTypes,
} from "../store/actions";
import { RootState } from '../store/store';
import type { User } from '../store/usersReducer';
import {ThunkDispatch} from "redux-thunk";

const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
};

const filterUsers = (users: User[], nameFilter: string, usernameFilter: string, emailFilter: string, phoneFilter: string) => {
    return users.filter((user) => {
        return user.name.toLowerCase().includes(nameFilter.trim().toLowerCase()) &&
            user.username.toLowerCase().includes(usernameFilter.trim().toLowerCase()) &&
            user.email.toLowerCase().includes(emailFilter.trim().toLowerCase()) &&
            user.phone.toLowerCase().includes(phoneFilter.trim().toLowerCase());
    });
}

function UserListContainer() {
    const dispatch: ThunkDispatch<RootState, void, UserActionTypes> = useDispatch();
    const users = useSelector((state: RootState) => state.users.users) as User[];
    const nameFilter = useSelector((state: RootState) => state.users.nameFilter) as string;
    const usernameFilter = useSelector((state: RootState) => state.users.usernameFilter) as string;
    const emailFilter = useSelector((state: RootState) => state.users.emailFilter) as string;
    const phoneFilter = useSelector((state: RootState) => state.users.phoneFilter) as string;

    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        fetchUsers().then((users) => {
            dispatch(setUsers(users));
        });
    }, [dispatch]);


    useEffect(() => {
        if (isFirstRender && users) {
            setIsFirstRender(false);
            dispatch(setFilteredUsers(users));
        }
    }, [users, dispatch, isFirstRender]);
    useEffect(() => {
        if (users) {
            dispatch(setFilteredUsers(filterUsers(users, nameFilter, usernameFilter, emailFilter, phoneFilter)));
        }
    }, [users, nameFilter, usernameFilter, emailFilter, phoneFilter, dispatch]);

    const handleFilterChange = (name: string, value: string) => {
        switch (name) {
            case 'name':
                dispatch(setNameFilter(value));
                break;
            case 'username':
                dispatch(setUsernameFilter(value));
                break;
            case 'email':
                dispatch(setEmailFilter(value));
                break;
            case 'phone':
                dispatch(setPhoneFilter(value));
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <UserListView
                handleFilterChange={handleFilterChange}
            />
        </div>
    );
}


export default UserListContainer;