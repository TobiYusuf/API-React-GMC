import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setListOfUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []); // Empty dependency array ensures this effect runs once

    return (
        <div className="user-list">
            <h1>User List</h1>
            <ul>
                {listOfUsers.map(user => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.email} - {user.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
