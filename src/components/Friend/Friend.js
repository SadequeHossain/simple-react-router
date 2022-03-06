import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Friend.css'

const Friend = (props) => {

    const { name, id, phone, website, email, address, city } = props.friend;
    const histroy = useHistory();
    const friendStyle = {
        border: '3px Solid goldenrod',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px'



    };

    const handleFriendClick = () => {
        histroy.push(`/friend/${id}`)
    }
    return (
        <div style={friendStyle}>
            <h2>I am {name}</h2>
            <h5>Call me: {phone}</h5>
            <p>Visite me :{website}</p>
            I live in : {address.city}


            <br />
            <Link to={`/friend/${id}`}> <button>Visit Me</button></Link>
            <br />
            <button onClick={handleFriendClick}>Visit me 2</button>

        </div>
    );
};

export default Friend;