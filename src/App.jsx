import { useState, useEffect } from "react";
import "./App.css";
import { Products } from "./Context/Products";
import NavBar from "./Context/NavBar";
import { useDispatch,useSelector } from "react-redux";
import Accordion from "./Context/Accordion";
function App() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch=useDispatch()


  async function fetchProducts() {
    try {
      setIsLoaded(false);
      const repo = await fetch("https://fakestoreapi.com/products");
      const data = await repo.json();
      console.log(data)
      setProducts(data);
      setIsLoaded(true);
    } catch (error) {
      console.error("Failed to fetch API", error);
      setIsLoaded(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (

      <div className="flex flex-col min-h-screen  bg-gray-100">
        {/* <NavBar /> */}
        {isLoaded ? (
          products.map((prod) => <Products key={prod.id} item={prod} />)
        ) : (
          <p className="text-center text-lg p-4">Loading...</p>
        )}
      </div>
      // <Accordion />
    
  );
}

export default App;
