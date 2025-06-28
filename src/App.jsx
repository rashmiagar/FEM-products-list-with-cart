import { useState } from "react";
import "./App.css";
import { Products } from "./components/Products.jsx";
import { data } from "./data.js";
import { v4 as uuidv4 } from "uuid";
import Cart from "./components/Cart.jsx";

function App() {
  const [products, setProducts] = useState(data);

  return (
    <div className="flex md:flex-row flex-col gap-2 min-h-screen bg-[#FCF8F5FF]">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-4 flex-wrap">
        {products.map((prod) => (
          <Products key={uuidv4()} item={prod} />
        ))}
      </div>
      <Cart />
    </div>
  );
}

export default App;
