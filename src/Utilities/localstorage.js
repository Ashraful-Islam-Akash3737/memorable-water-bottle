const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString)
    }
    return []
}
 

const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

// add to local storage
const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id);
    // save to local storage
    saveCartToLS(cart);
}

// remove from local storage
const removeFromLocalStorage = id => {
    const cart = getStoredCart();
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining);
}

export { addToLS, getStoredCart, removeFromLocalStorage }