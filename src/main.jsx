import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "../utils/store.js";
import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "./components/NavBar.jsx";
import About from "./components/About.jsx"
import Cart from "./components/Cart.jsx"
import Settings from "./components/Settings.jsx"

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <NavBar /> */}
      <div className="bg-[#FCF8F5FF] p-4">
        <h1 className="text-4xl font-extrabold text-yellow-950 mb-4">Desserts</h1>

        <Routes>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />

          <Route path="dashboard">
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);
