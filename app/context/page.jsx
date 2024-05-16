'use client'

import React, { createContext, useContext, useState,useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
{/*adds item to the cart */}
  const addToCart = (item) => {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };

  {/*removes item from the cart */}

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  
  };

  const getCartItemCount = () => {
    return cartItems.length;
  };

 {/*calculate the total price */}

 {/*const calculateTotalPrice = () => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};*/}

// Calculate total price
const calculateTotalPrice = () => {
  return cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price);
    const itemQuantity = parseInt(item.quantity);
    return total + (itemPrice * itemQuantity);
  }, 0);
};




  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, calculateTotalPrice,getCartItemCount}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
