import React from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>
        <nav className="links">
          <Link to="/">トップ</Link>
          <Link to="/counter/">カウンター</Link>
        </nav>
      </header>
      <div className="container">{children}</div>
      <footer>
        <p>&copy; 2022 KCCTdensan</p>
      </footer>
    </>
  );
};
export default Layout;
