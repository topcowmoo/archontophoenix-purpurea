import { Outlet, useLocation } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
      {!isHomePage && <Header />}
      <Outlet />
    </div>
  );
}

export default App;
