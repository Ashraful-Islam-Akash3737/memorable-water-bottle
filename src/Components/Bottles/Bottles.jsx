// import React from 'react';

import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
import { addToLS, getStoredCart, removeFromLocalStorage } from "../../Utilities/localstorage";
import Cart from '../Cart/Cart'


const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    useEffect(() => {
        console.log('call the useEffect', bottles.length);
        if (bottles.length > 0) {
            const storedCart = getStoredCart();
            console.log(storedCart)
            const savedCart = [];
            for (const id of storedCart) {
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    savedCart.push(bottle);

                }
            }
            console.log('saved cart', savedCart);
            setCart(savedCart);
        }
    }, [bottles])

    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);

    }
    const handleRemoveFromCart = id =>{

        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);

        removeFromLocalStorage(id);
    }

    return (
        <div>
            <h3>Bottles Available: {bottles.length} </h3>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            
            <div className="bottle-container">
                {
                    bottles.map((bottle) => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;