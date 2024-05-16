
import React from "react";
import { useCart } from "@/app/context/page";
import { UserAuth } from "@/app/context/AuthContext"; 
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "@/app/services/firebase"; 

export default function Card({ img, name, course, description, review, price }) {
  const { addToCart, cartItems } = useCart();
  const { user } = UserAuth(); // Assuming UserAuth provides the user object

  const handleAddToCart = async () => {
    if (!user) {
      // User is not logged in, show alert and prevent adding to cart
      alert("You must log in to add items to cart.");
      return;
      
    }

    console.log("Adding item to cart for user:", user);


    const newItem = {
      name,
      course,
      description,
      review,
      price,
      img,
    };

    const isProductInCart = cartItems.some((item) => item.name === name);

    if (isProductInCart) {
      alert(`${course} by ${name} is already in the cart. You can add a course only once.`);
      return;
    }

    // Add item to local cart
    addToCart(newItem);

    // Update cart in Firestore
    const userEmail = user.email;
    const userDocRef = doc(db, "users", userEmail);

    try {
      await updateDoc(userDocRef, {
        cart: arrayUnion(newItem),
      });
      alert(`Added ${course} by ${name} to cart!`);
    } catch (error) {
      console.error("Error updating cart in Firestore:", error);
    }
  };

 

  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-gradient-to-tl from-fuchsia-100 to bg-slate-50 shadow-md bg-clip-border rounded-xl w-96">
      <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img src={img} alt="card-image" />
      </div>
      <div className="p-6">
        <h2>{name}</h2>
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {course}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {description}
        </p>
        <div className="flex gap-x-10">
          <p className="text-gold-400">{review}</p>
          <h3 className="text-red-400 font-medium">{price}</h3>
        </div>
      </div>
      <div className="p-6 pt-0">
        <button
          onClick={handleAddToCart}
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-fuchsia-400 rounded text-white shadow-md shadow-gray-900/10 hover:bg-fuchsia-500 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
}
































{/*import React, { useContext } from "react";
import { UserAuth } from '@/app/context/AuthContext';
import { useCart } from "../context/page";

  export default function Card({img,name,course,description,review,price}) {
    
    //const{handleAddtocart} = useContext(Context)

    const { addToCart,cartItems } = useCart();

    const { user } = UserAuth();

  const handleAddToCart = () => {

    if (!user) {
      // User is not logged in, show alert and prevent adding to cart
      alert("You must log in to add items to cart.");
      return;
    }

    const newItem = {
      name,
      course,
      description,
      review,
      price,
      img,
    };
     
    const isProductInCart = cartItems.some((item) => item.name === name);

    if (isProductInCart) {
      // Product is already in the cart, prevent adding again (optional: show message)
      alert(`${course} by ${name} is already in the cart.You can add a course only once.`);
      return;
    }

    addToCart(newItem);
    // Optionally, you can provide feedback to the user after adding to cart
    alert(`Added ${course} by ${name} to cart! `);
  };


   
    return (
      <>
     
<div class="relative flex flex-col mt-6 text-gray-700 bg-gradient-to-tl from-fuchsia-100 to bg-slate-50 shadow-md bg-clip-border rounded-xl w-96">
  <div
    class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src={img}
      alt="card-image" />
  </div>
  <div class="p-6">
    <h2>{name}</h2>
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {course}
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      The place is close to Barceloneta Beach and bus stop just 2 min by walk
      and near to "Naviglio" where you can enjoy the main night life in
      Barcelona.
    </p>
    <div className="flex gap-x-10">
    <p className="text-gold-400">{review}</p>
    <h3 className="text-red-400 font-medium">{price}</h3>    
    </div>    
  </div>
  <div class="p-6 pt-0">
    <button
      onClick={handleAddToCart}
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-fuchsia-400 rounded text-white shadow-md shadow-gray-900/10 hover:bg-fuchsia-500 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">Enroll Now</button>
     </div>
     </div>
     </>
    );
  };
  
*/}
 