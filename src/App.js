import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Admin from "./pages/Admin";
import Signup from "./pages/Signup";
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
