import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../utils/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  // new small

  const renderCartSummary = () => {
    const dispatch = useDispatch();

    if (cart.items.length === 0) {
      return (
        <div>
          <p className="text-xl mb-2">Cart is empty</p>
        </div>
      );
    }

    return cart.items.map((item) => {
      return (
        <div key={item.id} className="mt-2 pb-2 border-b-1 border-zinc-300">
          <span>{item.name}</span><br/>
          <div className="flex flex-row w-[100%] justify-between">
            <div>
              <span className="text-amber-700 mr-2">
                {item.quantity}x
              </span>
              <span className="text-amber-950 mr-2 font-light">@ ${item.price.toFixed(2)}</span>
              <span className="text-amber-950 font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
            <img src="public/assets/images/icon-remove-item.svg" onClick={() => dispatch(remove(item))} className="border-2 rounded-full p-1 border-yellow-700 cursor-pointer hover:border-black" />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="p-4 bg-white w-[25%] rounded-lg ml-4">
      <h2 className="text-2xl text-amber-700 font-bold">Your Cart ({cart.quantity})</h2>
      <div className="flex flex-col gap-4">
        <div className="font-medium rounded-lg text-sm py-2.5 me-2 mb-2">
          {renderCartSummary()}
        </div>

        <div className="flex justify-between">Order Total <h2 className="text-2xl text-yellow-950 font-extrabold">${cart.total}</h2></div>
        <button className="bg-amber-800 rounded-2xl p-2 w-[70%] ml-[15%] text-white cursor-pointer">Confirm Order</button>
      </div>
    </div>
  );
};

export default Cart;
