import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Signup from "./pages/Signup";
import Login from './pages/Login';
import Admin from './components/Admin';
import AddSp from "./pages/AddSp";
import DeaultLayoutAdmin from './components/DeaultLayoutAdmin';
import Deletesp from './pages/Deletesp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />} />
        <Route path="/Admin" element={<DeaultLayoutAdmin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/addsp" element={<AddSp/>} />
        <Route path="/abc%" element={<Deletesp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
