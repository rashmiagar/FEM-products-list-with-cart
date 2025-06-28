import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, clear } from "../../utils/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [isVisible, setIsVisible] = React.useState(false);
  const dispatch = useDispatch();

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const renderCartSummary = () => {
    if (cart.items.length === 0) {
      return (
        <img
          src="/assets/images/illustration-empty-cart.svg"
          className="mx-auto"
        />
      );
    }

    return cart.items.map((item) => {
      return (
        <div key={item.id} className="mt-2 pb-2 border-b-1 border-zinc-300">
          <span>{item.name}</span>
          <br />
          <div className="flex flex-row w-[100%] justify-between">
            <div>
              <span className="text-amber-700 mr-2">{item.quantity}x</span>
              <span className="text-amber-950 mr-2 font-light">
                @ ${item.price.toFixed(2)}
              </span>
              <span className="text-amber-950 font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
            <img
              src="public/assets/images/icon-remove-item.svg"
              onClick={() => dispatch(remove(item))}
              className="border-2 rounded-full p-1 border-yellow-700 cursor-pointer hover:border-black"
            />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="p-4 bg-white md:w-[25%] h-fit rounded-lg md:ml-4 min-w-80 flex flex-col justify-around">
      <h2 className="text-2xl text-amber-700 font-bold">
        Your Cart ({cart.quantity})
      </h2>
      <div className="flex flex-col gap-4">
        <div className="font-medium rounded-lg text-sm me-2">
          {renderCartSummary()}
        </div>
        {cart.items.length > 0 ? (
          <React.Fragment>
            <div className="flex justify-between mb-2">
              Order Total{" "}
              <h2 className="text-med text-yellow-950 font-extrabold">
                ${cart.total.toFixed(2)}
              </h2>
            </div>
            <div className="p-2 bg-gray-100 text-center rounded-sm"> <img src="/assets/images/icon-carbon-neutral.svg" className="inline" /> This is a <strong>carbon neutral</strong> delivery</div>
            <button
              className={`bg-amber-800 rounded-2xl p-2 w-[70%] ml-[15%] text-white cursor-pointer ${
                cart.items.length === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={toggleVisibility}
              disabled={cart.items.length === 0}
            >
              Confirm Order
            </button>
          </React.Fragment>
        ) : (
          <p className="mx-auto font-bold text-xs text-amber-900">
            {" "}
            Your added items with appear here{" "}
          </p>
        )}
      </div>
      {isVisible && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" >
          <div className="bg-white rounded-lg p-8 shadow-lg min-w-[35%] max-h-[70%] relative">
            {/* <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
              onClick={toggleVisibility}
              aria-label="Close"
            >
              &times;
            </button> */}
            <img
              src="/assets/images/icon-order-confirmed.svg"
              className="w-10 h-10 mx-auto mb-4 ml-0"
              alt="Order Confirmed"
            />
            <h3 className="text-3xl font-bold">Order Confirmed</h3>
            <p className="text-stone-500 font-light text-sm">
              We hope you enjoy your food!
            </p>
            <div className="bg-[#FCF8F5FF] p-4 mt-4 max-h-[40vh] overflow-y-auto">
              <div>
                {cart.items.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="mt-2 pb-2 border-b-1 border-zinc-300 flex flex-row items-center gap-4"
                    >
                      <img
                        src={item.image.thumbnail}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg mb-2 mr-2"
                      />

                      <div className="flex flex-col w-[100%] justify-between">
                        <span className="wrap-break-word">{item.name}</span>
                        <div>
                          <span className="text-amber-700 mr-2">
                            {item.quantity}x
                          </span>
                          <span className="text-amber-950 mr-2 font-light">
                            @ ${item.price.toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <span className="text-amber-950 font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className=" flex justify-between mt-4">
                <span>Order Total:</span>
                <span className="font-bold">${cart.total.toFixed(2)}</span>
              </div>
            </div>
            <button
              className="mt-6 bg-amber-700 text-white rounded-lg px-4 py-2 w-full"
              onClick={() => {
                dispatch(clear());
                toggleVisibility();
              }}
            >
              Start New Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
