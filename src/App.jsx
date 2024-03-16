import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams, useLocation } from "react-router-dom";
import "../styles.scss";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

function Nav() {
  const { pathname } = useLocation();

  return (
    <nav>
      <Link to="/" className={pathname === "/" ? "active" : ""}>
        Gallery
      </Link>
      <Link to="/dashboard" className={pathname === "/dashboard" ? "active" : ""}>
        Dashboard
      </Link>
    </nav>
  );
}
export default App;
