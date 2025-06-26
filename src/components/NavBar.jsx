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
    <nav className="bg-white shadow-md p-4">
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-extrabold">Desserts</h1>
      <Link to={"/cart"}> Cart </Link>
      <Link to={"/"}> Dashboard </Link>
      <div className="flex gap-6">
        <span>🛒 Items: <strong>{cart.quantity}</strong></span>
        <span>💰 Total: <strong>${cart.total}</strong></span>
      </div>
    </div>
  </nav>
    
  );
};

export default NavBar;
