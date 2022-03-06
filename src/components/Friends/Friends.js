import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Friend from '../Friend/Friend';

import './Friends.css'

const Friends = () => {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))

    }, [])

    return (
        <div className="friend-container" >


            {
                friends.map(friend => <Friend
                    friend={friend}
                    key={friend.id}



                ></Friend>)
            }
        </div>
    );
};

export default Friends;