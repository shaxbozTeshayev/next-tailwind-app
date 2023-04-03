import React from "react";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
