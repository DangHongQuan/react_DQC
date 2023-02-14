import Admin from "./components/Admin";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AddSp from "./pages/AddSp";
import DeaultLayoutAdmin from './components/DeaultLayoutAdmin';

const routes = [
  { path: "Admin", component: <DeaultLayoutAdmin /> },
  { path: "signup", component: <Signup /> },
  { path: "sigup", component: <Login /> },
];

export default routes;
