import { Routes, Route } from "react-router-dom";
import TopNav from "./components/Navbar";
import Register from "./pages/Register";
import { useState } from "react";
import Cookies from "js-cookie";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Order from "./pages/Order";  

function App() {
  const [token, setToken] = useState(Cookies.get("authToken") || "");

  return (
    <>
      <TopNav data={{ token, setToken }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
