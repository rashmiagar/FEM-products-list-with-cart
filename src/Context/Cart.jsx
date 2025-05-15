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
        <div key={item.id} className="flex flex-col mt-2">
          <span>{item.title}</span>
          <span>
            <strong>Quantity</strong>: {item.quantity}
          </span>
          <span>
            <strong>Price</strong>: ${item.price}
          </span>
          <br />
          <button
            onClick={() => dispatch(remove(item))}
            className="font-bold text-white
          bg-red-500 "
          >
            Remove
          </button>
        </div>
      );
    });
  };

  return (
    <div className="flex justify-between items-center">
      {/* TODO: Implement cart summary display */}
      <div className="flex items-center gap-4">
        <div className="font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
          {renderCartSummary()}
          <span>
            <strong>Items in cart</strong>: {cart.quantity}
          </span>
          <br />
          <span>
            <strong>Total Price</strong>: ${cart.total}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
