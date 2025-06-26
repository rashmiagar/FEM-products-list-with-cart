import { useState } from "react";
import "./App.css";
import { Products } from "./components/Products.jsx";
import { useDispatch,useSelector } from "react-redux";
// import Accordion from "./components/Accordion.js";
import { data } from "./data.js";
import { v4 as uuidv4 } from "uuid";
import Cart from './components/Cart.jsx'

function App() {
  const [products, setProducts] = useState(data);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch=useDispatch()
 
  return (
    <div className="flex flex-row">
      <div className="grid grid-cols-3  min-h-screen  bg-[#FCF8F5FF]">
          {
            products.map((prod) => <Products key={uuidv4()} item={prod} />)
          }        
      </div>   
      <Cart /> 
    </div>
  );
}

export default App;
