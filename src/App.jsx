import { useState, useEffect } from "react";
import "./App.css";
import { Products } from "./components/Products.jsx";
import { useDispatch,useSelector } from "react-redux";
// import Accordion from "./components/Accordion.js";
import { data } from "./data.js";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [products, setProducts] = useState(data);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch=useDispatch()


  // async function fetchProducts() {
  //   try {
  //     setIsLoaded(false);
  //     const repo = await fetch("https://fakestoreapi.com/products");
  //     const data = await repo.json();
  //     console.log(data)
  //     setProducts(data);
  //     setIsLoaded(true);
  //   } catch (error) {
  //     console.error("Failed to fetch API", error);
  //     setIsLoaded(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return (

      <div className="grid grid-cols-4  min-h-screen  bg-gray-100">
          {
            products.map((prod) => <Products key={uuidv4()} item={prod} />)
          }
        
      </div>
      // <Accordion />
    
  );
}

export default App;
