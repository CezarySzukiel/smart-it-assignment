import {useEffect, useState} from "react";
import UserListView from "./UserListView";
import {useSelector, useDispatch} from 'react-redux';
import {
    setUsers,
    setNameFilter,
    setUsernameFilter,
    setEmailFilter,
    setPhoneFilter,
    setFilteredUsers,
} from "../store/actions";

const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
};

const filterUsers = (users, nameFilter, usernameFilter, emailFilter, phoneFilter) => {
    return users.filter((user) => {
        return user.name.toLowerCase().includes(nameFilter.trim().toLowerCase()) &&
            user.username.toLowerCase().includes(usernameFilter.trim().toLowerCase()) &&
            user.email.toLowerCase().includes(emailFilter.trim().toLowerCase()) &&
            user.phone.toLowerCase().includes(phoneFilter.trim().toLowerCase());
    });
}

function UserListContainer() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const nameFilter = useSelector(state => state.users.nameFilter);
    const usernameFilter = useSelector(state => state.users.usernameFilter);
    const emailFilter = useSelector(state => state.users.emailFilter);
    const phoneFilter = useSelector(state => state.users.phoneFilter);

    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        fetchUsers().then((users) => {
            dispatch(setUsers(users));
        });
    }, []);


    useEffect(() => {
        if (isFirstRender && users) {
            setIsFirstRender(false);
            dispatch(setFilteredUsers(users));
        }
    }, [users]);
    useEffect(() => {
        if (users) {
            dispatch(setFilteredUsers(filterUsers(users, nameFilter, usernameFilter, emailFilter, phoneFilter)));
        }
    }, [users, nameFilter, usernameFilter, emailFilter, phoneFilter]);

    const handleFilterChange = (target) => {
        const value = target.value;
        const name = target.name;
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