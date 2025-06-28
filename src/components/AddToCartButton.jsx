import React, { useState } from "react";
import { increase, decrease } from "../../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import DecrementQuantityIcon from "/assets/images/icon-decrement-quantity.svg";
import IconAddToCart from "/assets/images/icon-add-to-cart.svg";

export const AddToCartButton = ({ add, remove, item }) => {
  const reduxItems = useSelector((state) => state.cart.items);
  const [flag, setFlag] = React.useState(false);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    dispatch(increase({ ...item, quantity: quantity }));
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setFlag(false);
      remove()
    }
    dispatch(decrease({ ...item, quantity: quantity }));
  };

  React.useEffect(() => {
    const existingItem = reduxItems.find((i) => i.id === item.id);
    
    if (existingItem) {
      setQuantity(existingItem.quantity);
      setFlag(existingItem.flag);
    } else {
      setQuantity(0)
      setFlag(false)
    }
  }, [reduxItems, item.id]);

  return flag ? (
    <div className="flex flex-row items-center rounded-full  bg-amber-700 py-1 px-4 -mt-4 justify-between">
      <span
        onClick={handleDecrease}
        // className=" text-black border-2 border-amber-400  font-bold mx-4 rounded-full px-2 py-1"
        className="m-2"
      >
        <img
          src="/assets/images/icon-decrement-quantity.svg"
          className="border-1 border-white-400 text-white cursor-pointer rounded-full px-1 w-4 h-4"
        ></img>
      </span>
      <p className="text-white mx-1">{quantity}</p>
      <span
        onClick={handleIncrease}
        // className=" text-white border-2 border-amber-400 font-bold py-[4px] px-[8px] mx-4 rounded-full"
        className="m-2"
      >
        <img
          src="/assets/images/icon-increment-quantity.svg"
          className="border-1 border-white-400 text-white cursor-pointer rounded-full px-1 w-4 h-4"
        ></img>
      </span>
      
    </div>
  ) : (
    <button
      onClick={add}
      className=" cursor-pointer text-xs text-black border-1 hover:text-amber-800 hover:font-bold bg-white py-2 px-4 rounded-full -mt-4"
    >
      <img src="/assets/images/icon-add-to-cart.svg" className="w-4 h-4 inline " /> <span>Add to cart</span>
    </button>
  );
};
