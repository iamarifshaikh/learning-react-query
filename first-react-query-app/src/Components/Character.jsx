import React from 'react';

const Character = ({character}) => {
    
    const {id,name,status,species,gender,image, location:{name:locationName}} = character;
    
    return (
        <div key={id} className="card">
            <img src={image} alt="Image from rick and morty"/>
            <div className="text-container">
                <h3>{name}</h3>
                <p className="status">{status} - {species}</p>
                <p className="title">Last seen on</p>
                <p>{locationName}</p>
            </div>
        </div>
    )
}

export default Character;