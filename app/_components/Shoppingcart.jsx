'use client'
import React from 'react';
import { useCart } from '@/app/context/page';

const ShoppingCart = () => {
  const { cartItems, removeFromCart, calculateTotalPrice} = useCart();

  return (
    <div>
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between mb-2">
            <div className='mx-4 p-1 text-white'>
              <p className="text-sm text-white font-bold">{item.course}</p>
              <p>by {item.name}</p>
            </div>
            <div className="flex items-center text-white font-semibold">
              <p className="mr-4">{item.price}</p>
              <div className='bg-red-400 mx-2 rounded p-1 hover:bg-red-600'>
              <button onClick={() => removeFromCart(index)} className="text-white font-medium">              
                Remove
              </button>
              </div>             
            </div>
          </div>
        ))}
        <hr className="my-4" />
        <div className="flex justify-between font-semibold text-white mx-1 p-1">
          <p>Total:</p>
          <p>${calculateTotalPrice()}</p>
        </div>
      </div>
  );
};

export default ShoppingCart;





 

