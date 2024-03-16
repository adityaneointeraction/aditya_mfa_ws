import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Routes, Route, Link, Outlet, useParams, useLocation } from "react-router-dom";
import "../styles.scss";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
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
