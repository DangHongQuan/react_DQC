import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signup from "./pages/Signup";
import Layout from "./user_components/Layout";
import Login from "./pages/Login";
import LoginAdmin from "./admin_pages/LoginAdmin";
import Shopcart from "./pages/Shopcart";
import Layouts from "./admin_containers/Layouts";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./admin_pages/AddProduct";
import ProductAdminList from "./admin_pages/ProductAdminList";
import CheckOurAdmin from "./admin_pages/CheckOurAdmin";
import ProductTTN from "./page_danhmuc/ProductTTN";
import EditQC_admin from "./admin_pages/EditQC_admin";
import Loi from "./pages/Loi";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product-details/:productId" element={<ProductDetails />} />
        <Route path="*" element={<Loi />} />
        <Route path="/" element={<Layout />} />
        <Route path="/admin" element={<Layouts />} />
        <Route path="/login/admin" element={<LoginAdmin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shopcart" element={<Shopcart />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/productAdminList" element={<ProductAdminList />} />
        <Route path="/checkout" element={<CheckOurAdmin />} />
        <Route path="/producTTN" element={<ProductTTN />} />
        <Route path="/editqc" element={<EditQC_admin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
