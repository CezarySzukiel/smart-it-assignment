import './userListView.css';
import {useSelector} from 'react-redux';

function UserListView(props) {
    const {handleFilterChange} = props;
    const filteredUsers = useSelector(state => state.users.filteredUsers);
    const nameFilter = useSelector(state => state.users.nameFilter);
    const usernameFilter = useSelector(state => state.users.usernameFilter);
    const emailFilter = useSelector(state => state.users.emailFilter);
    const phoneFilter = useSelector(state => state.users.phoneFilter);

    return (
        <div className={'user-list-view'}>
            <table>
                <thead>
                <tr>
                    <th>
                        Name
                        <input
                            type="text"
                            name={'name'}
                            value={nameFilter}
                            onChange={(e,) => handleFilterChange(e.target)}
                        />
                    </th>
                    <th>
                        Username
                        <input
                            type="text"
                            name={'username'}
                            value={usernameFilter}
                            onChange={(e) => handleFilterChange(e.target)}
                        />
                    </th>
                    <th>
                        Email
                        <input
                            type="text"
                            name={'email'}
                            value={emailFilter}
                            onChange={(e) => handleFilterChange(e.target)}
                        />
                    </th>
                    <th>
                        Phone
                        <input
                            type="text"
                            name={'phone'}
                            value={phoneFilter}
                            onChange={(e) => handleFilterChange(e.target)}
                        />
                    </th>
                </tr>
                </thead>
                <tbody>
                {filteredUsers && filteredUsers.map((user) => (
                    <tr key={user.id}>
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