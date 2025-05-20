import React, { useState } from "react";
import { CartContext } from "./CartContext";
import { useDispatch,useSelector } from "react-redux";
import  {add} from "../../utils/cartSlice";
import { remove } from "../../utils/cartSlice";
import { AddToCartButton } from "./AddToCartButton";

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
    <div className="flex flex-col items-center justify-around rounded-lg  m-2 w-70 ">
      <div className="rounded-md overflow-hidden w-70">
        <picture>
          <source
            media="(min-resolution: 1.5x)"
            // srcset="/image-1000.jpg 1000w, /image-1500.jpg 1500w"
            srcSet={`${item.image.mobile} 1000w, ${item.image.desktop} 1500w`}
            sizes="(min-width: 768px) 500px, 100vw"
          />
          <img
            alt="An image"
            width="500"
            height="500"
            src={item.image.desktop}
          />
        </picture>
      </div>
      <AddToCartButton add={handleAddToCart} item={item} />
      <div className="flex flex-col w-full">
        <span className="text-gray-600">{item.category}</span>
        <span className="font-semibold">{item.name}</span>
        <span className="font-bold text-xl">${item.price}</span>
        
      
      </div>
    </div>
  );
};
