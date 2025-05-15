import React, { useState } from "react";
import { CartContext } from "./CartContext";
import { useDispatch,useSelector } from "react-redux";
import  {add} from "../../utils/cartSlice";
import { remove } from "../../utils/cartSlice";

export const Products = ({ item }) => {
  // const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  
const dispatch=useDispatch()


  const handleAddToCart = () => {
    if (quantity < 1) return alert("Please select a valid quantity.");
    // addToCart(item, quantity);
     dispatch(add({...item, quantity: quantity}))

  };
 const handleRemoveFromCart = () => {
  dispatch(remove(item))
 };
  
  return (
    <div className="flex flex-row items-center justify-around h-[250px] bg-white rounded-lg shadow-md m-2 p-4">
      <img src={item.image} alt={item.title} className="h-[150px] w-[150px] object-contain" />
      <div className="flex flex-col gap-2 w-[50%]">
        <span className="text-gray-600">Category: {item.category}</span>
        <span className="font-semibold">{item.title}</span>
        <span className="font-bold text-xl">${item.price}</span>
        <label className="text-sm">
          Quantity:
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="ml-2 w-16 border rounded p-1"
          />
        </label>
        <button
          onClick={handleAddToCart}
          className="hover:bg-yellow-600 text-black bg-yellow-500 font-bold py-2 px-4 rounded mt-2">
          Add to cart 🛒
        </button>
       
        <button 
         onClick={handleRemoveFromCart}
        className="hover:bg-red-600 text-white bg-red-500 font-bold py-2 px-4 rounded mt-2">
          Remove from cart ❌
        </button>  
      </div>
    </div>
  );
};
