import React from 'react';

const Band = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.genre}</p>
            <p>{props.likes}</p>
        </div>
    )
}

export default Band;