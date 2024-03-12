// import React from 'react';
import PropTypes from 'prop-types'
import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
    const {name, img, price} = bottle;
    return (
        <div className="bottle">
            <img className='img' src={img} alt="" />
            <h2>Name: {name} </h2>
            <p>Price: {price} $ </p>
            <button onClick={()=>{
                handleAddToCart(bottle)
            }}>Purchase</button>
            
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.array.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;