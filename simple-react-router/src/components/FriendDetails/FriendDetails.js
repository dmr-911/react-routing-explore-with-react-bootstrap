import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetails = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    const { name, email, address } = friend;
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    },[])
    const history = useHistory();
    const handleAll = () => {
        history.push('/friends');
    }
    return (
        <div>
            <h2>Details of Friend {friendId}</h2>
            <h1>{name}</h1>
            <p>Email : {email}</p>
            <p>Address : {address?.city}</p>
            <button onClick={handleAll}>All Friends</button>
        </div>
    );
};

export default FriendDetails;