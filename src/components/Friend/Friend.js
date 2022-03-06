import React from 'react';
import { Link } from 'react-router-dom';

import './Friend.css'

const Friend = (props) => {

    const { name, id, phone, website, email, address, city } = props.friend;

    const friendStyle = {
        border: '3px Solid goldenrod',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px'



    };
    return (
        <div style={friendStyle}>
            <h2>I am {name}</h2>
            <h5>Call me: {phone}</h5>
            <p>Visite me :{website}</p>
            I live in : {address.city}
            <br />
            <Link to={`/friend/${id}`}> Visit me</Link>
        </div>
    );
};

export default Friend;