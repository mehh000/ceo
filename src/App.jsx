//========all the import start here=========
import Navber from "./Components/Navber";
import Display from "./Pages/Display/Display";
import Cart from "./Pages/Cart/Cart";
import "./App.css";
import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import product from "./Pages/Display/product";

//========all the import End here=========

function App() {
  return (
    <div>
      <Router>
        <Navber />
        <Routes>
          <Route path="/" element={<Display />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
