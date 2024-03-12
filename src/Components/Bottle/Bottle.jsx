// import React from 'react';
import './Bottle.css'

const Bottle = ({bottle}) => {
    const {name, img, price} = bottle;
    return (
        <div className="bottle">
            <img className='img' src={img} alt="" />
            <h2>Name: {name} </h2>
            <p>Price: {price} $ </p>
            
        </div>
    );
};

export default Bottle;