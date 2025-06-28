import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../utils/cartSlice";
import { AddToCartButton } from "./AddToCartButton";

export const Products = ({ item }) => {
  const reduxItems = useSelector((state) => state.cart.items);
  const existingItem = reduxItems.find((i) => i.id === item.id);

  const [quantity, setQuantity] = useState(
    existingItem ? existingItem.quantity : 0
  );

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    setQuantity(quantity + 1);
    dispatch(add({ ...item, quantity: 1 }));
  };
  const handleRemoveFromCart = () => {
    setQuantity(quantity - 1);
    dispatch(remove({...item, quantity: 1}));
  };

  useEffect(() => {
    setQuantity(existingItem ? existingItem.quantity : 0);
  }, [reduxItems.length]);

  return (
    <div className="flex flex-col items-center justify-around rounded-lg m-2">
      <div
        className={`rounded-md overflow-hidden ${
          quantity > 0 ? "border-2 border-amber-700" : "border-none"
        }`}
      >
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
      <AddToCartButton
        add={handleAddToCart}
        remove={handleRemoveFromCart}
        item={item}
      />
      <div className="flex flex-col w-full m-4">
        <span className="text-amber-950">{item.category}</span>
        <span className="font-semibold">{item.name}</span>
        <span className=" text-xl text-amber-700 font-semibold">
          ${item.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};
