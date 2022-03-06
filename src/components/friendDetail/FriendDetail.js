import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {

    const { friendId } = useParams();

    const [friend, setFriend] = useState([]);

    const history = useHistory();

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])

    const handleClick = () => {
        history.push('/friends');
    }
    return (
        <div>
            <h5>Friend ID : {friendId}</h5>
            <h5>Name: {friend.name}</h5>
            <h5>Address:{friend.address?.street},  {friend.address?.city} </h5>
            <p>Email: {friend.email}</p>

            <button onClick={handleClick}> See All Friends</button>
        </div>
    );
};

export default FriendDetail;