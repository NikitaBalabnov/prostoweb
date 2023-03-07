import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const setActiveLink = ({ isActive }) => (isActive ? "activ-link" : "link");
  return (
    <div>
      <header className="header">
        <nav className="navigation">
          <NavLink className={setActiveLink} to="/">
            Home
          </NavLink>
          <NavLink className={setActiveLink} to="/about">
            About
          </NavLink>
          <NavLink className={setActiveLink} to="/blog">
            Blog
          </NavLink>
        </nav>
      </header>
      <Outlet />
      <footer>2022 - 2023</footer>
    </div>
  );
};
export { Layout };
