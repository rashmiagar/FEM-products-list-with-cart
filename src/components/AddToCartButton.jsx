import React, {useState} from 'react'
import { increase, decrease } from "../../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export const AddToCartButton = ({add, item}) => {
  const reduxItems =  useSelector((state) => state.cart.items);
  const [flag, setFlag] = React.useState(reduxItems.filter((i) => i.id === item.id)[0]?.flag);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  
  const handleIncrease = () => {
    setQuantity(quantity + 1);
    dispatch(increase({...item, quantity: item.quantity+1}));
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      dispatch(decrease({...item, quantity: item.quantity-1}));
    } else {
      setFlag(false);
    }
  }

  return (
    flag ? <div className="flex flex-row items-center rounded-full border-2 bg-amber-700 py-2 px-4 -mt-4"><span
        onClick={handleIncrease}
        className=" text-white border-2 border-amber-400 font-bold py-[4px] px-[8px] mx-4 rounded-full">
        + 
      </span>
      <p className="text-white">{quantity}</p>
      <span
        onClick={handleDecrease}
        className=" text-black border-2 border-amber-400 bg-white font-bold py-2 px-4 mx-4 rounded-full">
        -
      </span></div> : (
      <button
        onClick={add}
        className="hover:bg-yellow-200 text-black border-2 border-amber-400 bg-white font-bold py-2 px-4 rounded-full -mt-4">
        🛒 Add to cart 
      </button>
    )
  );
}
