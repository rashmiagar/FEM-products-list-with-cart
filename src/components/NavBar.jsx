import React from "react";
// import { CartContext } from "./CartContext";
import { useSelector } from "react-redux";
import {Link} from "react-router"

const NavBar = () => {
  // const { itemsCount, totalPrice } = useContext(CartContext);
  const cart=useSelector((store)=>store.cart)
  const renderCartSummary = () => {
    return cart.items.map((item) => {
      return (
        <div key={item.id} className='flex flex-col mt-2'>
          <span>{item.title}</span>
          <span><strong>Quantity</strong>: {item.quantity}</span>
          <span><strong>Price</strong>: ${item.price}</span><br/>
        </div>
      );
    });

  };

  return (
    // <nav className="bg-white shadow-md p-4">
    //   <div className="flex justify-between items-center">
    //     <h1 className="text-xl font-bold">🛍️ E-Commerce Store</h1>
    //     <div className="flex gap-6">
    //       <span>🛒 Items: <strong>{cart.quantity}</strong></span>
    //       <span>💰 Total: <strong>${cart.total}</strong></span>
    //     </div>

    //     {/* TODO: Implement cart summary display */}
    //     <div className='flex items-center gap-4'>
    //       <button  type="button" popovertarget="mypopover" popoverTargetAction="toggle" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Cart</button>
    //       <div id="mypopover" popover="auto" class="font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
    //         {renderCartSummary()}
    //         <span><strong>Items in cart</strong>: {cart.items.quantity}</span><br/>
    //         <span><strong>Total Price</strong>: ${cart.price} </span>
            
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <nav className="bg-white shadow-md p-4">
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold">🛍️ E-Commerce Store</h1>
      <Link to={"/about"}> About </Link>
      <Link to={"/cart"}> Cart </Link>
      <Link to={"/dashboard"}> Dashboard </Link>
      <div className="flex gap-6">
        <span>🛒 Items: <strong>{cart.quantity}</strong></span>
        <span>💰 Total: <strong>${cart.total}</strong></span>
      </div>
    </div>
  </nav>
    
  );
};

export default NavBar;
