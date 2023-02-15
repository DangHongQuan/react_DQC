import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signup from "./pages/Signup";
import Layout from "./user_components/Layout";
import Login from './pages/Login';
import LoginAdmin from './admin_pages/LoginAdmin';

import Layouts from './admin_containers/Layouts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout/>} />
        <Route path="/admin" element={<Layouts/>} />
        <Route path="/admin/login" element={<LoginAdmin/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
