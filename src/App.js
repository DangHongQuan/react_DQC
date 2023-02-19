import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signup from "./pages/Signup";
import Layout from "./user_components/Layout";
import Login from "./pages/Login";
import LoginAdmin from "./admin_pages/LoginAdmin";
import Shopcart from "./pages/Shopcart";
import Layouts from "./admin_containers/Layouts";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product-details/:productId" element={<ProductDetails/>} />
        <Route path="/*" element={<Layout />} />
        <Route path="/admin" element={<Layouts />} />
        <Route path="/login/admin" element={<LoginAdmin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shopcart" element={<Shopcart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
