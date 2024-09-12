import './userListView.css';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import React from "react";
import { User } from "../store/usersReducer";

interface UserListViewProps {
    handleFilterChange: (name: string, value: string) => void;
}

const UserListView: React.FC<UserListViewProps> = ({ handleFilterChange }) => {
    const filteredUsers = useSelector((state: RootState) => state.users.filteredUsers) as User[];
    const nameFilter = useSelector((state: RootState) => state.users.nameFilter) as string;
    const usernameFilter = useSelector((state: RootState) => state.users.usernameFilter) as string;
    const emailFilter = useSelector((state: RootState) => state.users.emailFilter) as string;
    const phoneFilter = useSelector((state: RootState) => state.users.phoneFilter) as string;
    const icon = 'smart-it-assignment/icons8-search-50.png';
    return (
        <div className={'user-list-view'}>
            <table>
                <thead>
                <tr>
                    <th>
                        <p className='table-title'>Name</p>
                        <div className='search-div'>
                            <img src={icon} alt='search icon' className='search-icon'/>
                            <input
                                type="text"
                                name='name'
                                aria-label="Search by name"
                                value={nameFilter}
                                onChange={(e,) => handleFilterChange(e.target.name, e.target.value)}
                            />
                        </div>
                    </th>
                    <th>
                        <p className='table-title'>Username</p>
                        <div className='search-div'>
                            <img src={icon} alt='search icon' className='search-icon'/>
                            <input
                                type="text"
                                name='username'
                                aria-label="Search by username"
                                value={usernameFilter}
                                onChange={(e) => handleFilterChange(e.target.name, e.target.value)}
                            />
                        </div>
                    </th>
                    <th>
                    <p className='table-title'>Email</p>
                        <div className='search-div'>
                            <img src={icon}  alt='search icon' className='search-icon'/>
                            <input
                                type="text"
                                name='email'
                                aria-label="Search by email"
                                value={emailFilter}
                                onChange={(e) => handleFilterChange(e.target.name, e.target.value)}
                            />
                        </div>
                    </th>
                    <th>
                        <p className='table-title'>Phone</p>
                        <div className='search-div'>
                            <img src={icon}  alt='search icon' className='search-icon'/>
                            <input
                                type="text"
                                name='phone'
                                aria-label="Search by phone"
                                value={phoneFilter}
                                onChange={(e) => handleFilterChange(e.target.name, e.target.value)}
                            />
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                {filteredUsers && filteredUsers.map((user: User) => (
                    <tr key={user.id} className={user.id % 2 === 0 ? 'even' : 'odd'}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserListView;