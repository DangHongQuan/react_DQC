import Admin from "./pages/Admin";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const routes = [
  { path: "Admin", component: <Admin /> },
  { path: "signup", component: <Signup /> },
  { path: "sigup", component: <Login /> },
];

export default routes;
