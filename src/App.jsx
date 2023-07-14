import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroceryHome from "./screens/Grocery Home/GroceryHome";
import GroceryCart from "./screens/Grocery Cart/GroceryCart";

import GroceryAddress from "./screens/GroceryAddress/GroceryAddress";
import MainNavbar from "./components/Navbar/MainNavbar";
import Footer from "./components/Footer/Footer";
import GroceryCheckout from "./screens/GroceryCheckout/GroceryCheckout";

export default function App() {
  return (
    <>
      <Router>
        <MainNavbar />
        <Routes>
          <Route exact path="/" element={<GroceryHome />} />
          <Route path="/GroceryCart" element={<GroceryCart />} />
          <Route path="/GroceryCheckout" element={<GroceryCheckout />} />
          <Route path="/GroceryAddress" element={<GroceryAddress />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
