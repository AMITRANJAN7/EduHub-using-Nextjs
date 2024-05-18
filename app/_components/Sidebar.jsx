import React from 'react';
import { IoIosClose } from "react-icons/io" ;
import ShoppingCart from './Shoppingcart';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div
      className={`fixed top-0 right-0 lg:w-1/4 sm:w-1/2 h-screen bg-black/90 shadow-lg z-50 transform transition-transform ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={closeSidebar}>
          <IoIosClose className="h-10 w-10 text-white hover:text-blue-700" />
        </button>
      </div>
      {/* Sidebar content goes here */}
      {/* For example, display shopping cart items */}
      <div className="p-4 text-white font-medium">Your shopping cart content here :</div>

      <ShoppingCart/>

        <div className='bg-green-400 mx-4 p-4 my-6 flex justify-center rounded hover:bg-green-700 hover:text-white cursor-pointer'>
          <button className='font-semibold flex justify-center items-center'>Make Payment</button>
        </div>

    </div>
  );
};

export default Sidebar;
